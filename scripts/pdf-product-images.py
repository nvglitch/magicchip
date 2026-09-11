"""Render one PDF image occurrence with its original clipping and soft mask intact."""
from io import BytesIO
import fitz
from PIL import Image
from pypdf import PdfWriter
from pypdf.generic import ContentStream, NameObject

def rendered_images(reader_page):
    stream = ContentStream(reader_page.get_contents(), reader_page.pdf)
    draws = [i for i, (_, op) in enumerate(stream.operations) if op == b'Do']
    result=[]
    for selected in draws:
        writer=PdfWriter(); page=writer.add_page(reader_page)
        operations=[]
        for i,(args,op) in enumerate(stream.operations):
            if op == b'Do' and i != selected: continue
            if op in (b'Tj',b'TJ',b"'",b'"'): continue
            if op in (b'S',b's',b'f',b'F',b'f*',b'B',b'B*',b'b',b'b*'): operations.append(([],b'n'))
            else: operations.append((args,op))
        content=ContentStream(None,writer); content.operations=operations
        page[NameObject('/Contents')]=writer._add_object(content)
        data=BytesIO(); writer.write(data)
        with fitz.open(stream=data.getvalue(),filetype='pdf') as doc:
            pix=doc[0].get_pixmap(matrix=fitz.Matrix(3,3),alpha=True)
            im=Image.frombytes('RGBA',(pix.width,pix.height),pix.samples)
        box=im.getchannel('A').point(lambda x:255 if x>16 else 0).getbbox()
        if not box: continue
        x0,y0,x1,y1=[v/3 for v in box]
        if y0<120 or y1>355 or x1-x0<35: continue
        result.append((x0,y0,im.crop(box)))
    result.sort(key=lambda r:(0 if r[0]<282 else 1,r[1]))
    if not 2<=len(result)<=3: raise ValueError(f'Expected 2–3 visible product views, got {len(result)}')
    return [im for _,_,im in result]
