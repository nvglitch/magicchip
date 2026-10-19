from pathlib import Path
import re
import html
import json
import shutil
import math

from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.platypus import (
    BaseDocTemplate, PageTemplate, Frame, Paragraph, Spacer, Image,
    Table, TableStyle, PageBreak, KeepTogether, CondPageBreak, HRFlowable,
)
from reportlab.platypus.tableofcontents import TableOfContents
from pypdf import PdfReader
from PIL import Image as PILImage


ROOT = Path(__file__).resolve().parents[3]
SOURCE = ROOT / 'docs' / '项目介绍' / '项目介绍.md'
WORK = Path(__file__).resolve().parent
OUTPUT = ROOT / 'output' / 'pdf' / 'MagicChip-项目介绍.pdf'
COMPANION = SOURCE.with_suffix('.pdf')
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

FONT = 'MagicCJK'
BOLD = 'MagicCJKBold'
MONO = 'MagicMono'
pdfmetrics.registerFont(TTFont(FONT, 'C:/Windows/Fonts/msyh.ttc', subfontIndex=0))
pdfmetrics.registerFont(TTFont(BOLD, 'C:/Windows/Fonts/msyhbd.ttc', subfontIndex=0))
pdfmetrics.registerFont(TTFont(MONO, 'C:/Windows/Fonts/consola.ttf'))
pdfmetrics.registerFontFamily(FONT, normal=FONT, bold=BOLD, italic=FONT, boldItalic=BOLD)
pdfmetrics.registerFontFamily(MONO, normal=MONO, bold=MONO, italic=MONO, boldItalic=MONO)

BLUE = colors.HexColor('#106FB8')
INK = colors.HexColor('#172033')
MUTED = colors.HexColor('#526377')
LIGHT = colors.HexColor('#F0F7FC')
LINE = colors.HexColor('#D9E4EB')
PAPER = colors.white
PAGE_W, PAGE_H = A4
LEFT = RIGHT = 45
TOP = 53
BOTTOM = 46
WIDTH = PAGE_W - LEFT - RIGHT
HEIGHT = PAGE_H - TOP - BOTTOM

styles = {
    'body': ParagraphStyle('Body', fontName=FONT, fontSize=9.5, leading=16.5,
                           textColor=INK, spaceAfter=8, wordWrap='CJK', splitLongWords=True),
    'h2': ParagraphStyle('Section', fontName=BOLD, fontSize=16, leading=24,
                         textColor=INK, spaceBefore=17, spaceAfter=11,
                         keepWithNext=True, wordWrap='CJK'),
    'h3': ParagraphStyle('Subsection', fontName=BOLD, fontSize=11.1, leading=18,
                         textColor=BLUE, spaceBefore=11, spaceAfter=6,
                         keepWithNext=True, wordWrap='CJK'),
    'quote': ParagraphStyle('Quote', fontName=FONT, fontSize=9, leading=16,
                            textColor=MUTED, leftIndent=11, rightIndent=10,
                            borderColor=LINE, borderWidth=0.5, borderPadding=9,
                            backColor=LIGHT, spaceBefore=5, spaceAfter=10, wordWrap='CJK'),
    'caption': ParagraphStyle('Caption', fontName=FONT, fontSize=8, leading=12,
                              textColor=MUTED, alignment=TA_CENTER, spaceAfter=12,
                              wordWrap='CJK'),
    'cell': ParagraphStyle('Cell', fontName=FONT, fontSize=8.1, leading=12.8,
                           textColor=INK, spaceAfter=0, wordWrap='CJK', splitLongWords=True),
    'header_cell': ParagraphStyle('HeaderCell', fontName=BOLD, fontSize=8.3, leading=13,
                                  textColor=PAPER, spaceAfter=0, wordWrap='CJK'),
    'code': ParagraphStyle('Code', fontName=MONO, fontSize=7.8, leading=12,
                           textColor=INK, spaceAfter=0, wordWrap='CJK'),
    'cover_label': ParagraphStyle('CoverLabel', fontName=BOLD, fontSize=10,
                                  leading=16, textColor=BLUE, spaceAfter=15),
    'cover_title': ParagraphStyle('CoverTitle', fontName=BOLD, fontSize=27,
                                  leading=39, textColor=INK, spaceAfter=13),
    'cover_deck': ParagraphStyle('CoverDeck', fontName=FONT, fontSize=11.5,
                                 leading=20, textColor=MUTED, spaceAfter=20, wordWrap='CJK'),
    'small': ParagraphStyle('Small', fontName=FONT, fontSize=8, leading=13.5,
                            textColor=MUTED, spaceAfter=6, wordWrap='CJK'),
}


def clean(text):
    # Preserve meaning while avoiding PDF-hostile unicode dash variants.
    return text.replace('\u2011', '-').replace('\u2013', '-').replace('\u2014', '-')


def xml(text):
    return html.escape(clean(text), quote=False)


def inline(text):
    text = clean(text)
    saved = []

    def stash(value):
        key = f'ZZPLACEHOLDER{len(saved)}ZZ'
        saved.append(value)
        return key

    def link(match):
        label, target = match.group(1), match.group(2)
        if target.startswith('#'):
            attr = f'href="{html.escape(target, quote=True)}"'
        else:
            attr = f'href="{html.escape(target, quote=True)}"'
        return stash(f'<link {attr} color="#106FB8"><u>{xml(label)}</u></link>')

    # Protect the original Markdown fragments before XML escaping.
    text = re.sub(r'\[([^\n]+?)\]\(([^)]+)\)', link, text)

    def code(match):
        value = match.group(1)
        return stash(f'<font name="{FONT}" color="#106FB8">{xml(value)}</font>')

    text = re.sub(r'`([^`]+)`', code, text)
    text = xml(text)
    text = re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', text)
    for index, replacement in enumerate(saved):
        text = text.replace(f'ZZPLACEHOLDER{index}ZZ', replacement)
    return text


def plain(text):
    text = re.sub(r'\[([^\n]+?)\]\(([^)]+)\)', r'\1', text)
    return text.replace('**', '').replace('`', '')


class IntroDoc(BaseDocTemplate):
    def __init__(self, filename):
        super().__init__(str(filename), pagesize=A4, leftMargin=LEFT, rightMargin=RIGHT,
                         topMargin=TOP, bottomMargin=BOTTOM,
                         title='MagicChip 企业硬件官网 - 项目介绍与面试讲述稿',
                         author='MagicChip', subject='技术栈、产品建模、搜索、多语言、设计与工程验证',
                         pageCompression=1)
        frame = Frame(LEFT, BOTTOM, WIDTH, HEIGHT, leftPadding=0, rightPadding=0,
                      topPadding=0, bottomPadding=0)
        self.addPageTemplates(PageTemplate(id='Reading', frames=frame, onPage=self.page_chrome))
        self.section = ''

    def page_chrome(self, canv, doc):
        canv.saveState()
        if doc.page > 1:
            canv.setStrokeColor(LINE)
            canv.setLineWidth(0.5)
            canv.line(LEFT, PAGE_H - 33, PAGE_W - RIGHT, PAGE_H - 33)
            canv.setFillColor(BLUE)
            canv.setFont(BOLD, 8)
            canv.drawString(LEFT, PAGE_H - 24, 'MAGICCHIP / PROJECT CASE STUDY')
            canv.setFillColor(MUTED)
            canv.setFont(FONT, 7.5)
            canv.drawRightString(PAGE_W - RIGHT, PAGE_H - 24, '项目介绍与面试讲述稿')
        canv.setStrokeColor(LINE)
        canv.line(LEFT, 32, PAGE_W - RIGHT, 32)
        canv.setFont(FONT, 7)
        canv.setFillColor(MUTED)
        canv.drawString(LEFT, 20, '源码核对 2026-10-19  |  阅读版')
        canv.drawRightString(PAGE_W - RIGHT, 20, f'{doc.page:02d}')
        canv.restoreState()

    def afterFlowable(self, flowable):
        if not isinstance(flowable, Paragraph) or not getattr(flowable, '_bookmark', None):
            return
        key = flowable._bookmark
        text = flowable.getPlainText()
        level = getattr(flowable, '_outline_level', 0)
        self.canv.bookmarkPage(key)
        self.canv.addOutlineEntry(text, key, level=level, closed=(level == 0))
        if getattr(flowable, '_toc', False):
            self.notify('TOCEntry', (0, text, self.page, key))


def heading(text, key, subsection=False):
    result = Paragraph(inline(text), styles['h3' if subsection else 'h2'])
    result._bookmark = key
    result._outline_level = 1 if subsection else 0
    result._toc = not subsection
    return result


def image_block(label, relative):
    target = SOURCE.parent / relative
    with PILImage.open(target) as img:
        width, height = img.size
    max_height = 395 if height / width < 1.5 else 348
    factor = min(WIDTH / width, max_height / height)
    image = Image(str(target), width=width * factor, height=height * factor)
    image.hAlign = 'CENTER'
    caption = Paragraph(xml(label), styles['caption'])
    return KeepTogether([Spacer(1, 5), image, Spacer(1, 7), caption])


def code_block(lines):
    code_width = WIDTH - 26
    wrapped = []
    for line in lines:
        line = clean(line.expandtabs(4))
        parts, current, current_width = [], '', 0
        for char in line:
            font = MONO if ord(char) < 128 else FONT
            char_width = pdfmetrics.stringWidth(char, font, 7.8)
            if current and current_width + char_width > code_width:
                parts.append(current)
                current, current_width = '    ', pdfmetrics.stringWidth('    ', MONO, 7.8)
            current += char
            current_width += char_width
        parts.append(current)
        wrapped.extend(parts)
    rich_lines = []
    for line in wrapped:
        chunks = re.findall(r'[\x00-\x7f]+|[^\x00-\x7f]+', line)
        formatted = ''.join(f'<font name="{MONO if all(ord(ch) < 128 for ch in chunk) else FONT}">{xml(chunk).replace(" ", "&#160;")}</font>' for chunk in chunks)
        rich_lines.append(formatted or '&#160;')
    para = Paragraph('<br/>'.join(rich_lines), styles['code'])
    block = Table([[para]], colWidths=[WIDTH], hAlign='LEFT', spaceBefore=3, spaceAfter=11)
    block.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), colors.HexColor('#F5F7FA')),
        ('BOX', (0, 0), (-1, -1), 0.5, LINE),
        ('LEFTPADDING', (0, 0), (-1, -1), 12),
        ('RIGHTPADDING', (0, 0), (-1, -1), 12),
        ('TOPPADDING', (0, 0), (-1, -1), 9),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 9),
    ]))
    return block


def table_block(lines):
    rows = []
    for line in lines:
        cells = [cell.strip() for cell in line.strip().strip('|').split('|')]
        if all(re.fullmatch(r':?-{2,}:?', cell) for cell in cells):
            continue
        rows.append(cells)
    count = len(rows[0])
    # Use a compact key column and give long explanations room to wrap.
    if count == 2:
        ratios = [0.27, 0.73]
    elif count == 3:
        ratios = [0.19, 0.39, 0.42]
    elif count == 4:
        ratios = [0.18, 0.22, 0.26, 0.34]
        if '优先级' in rows[0][0]:
            ratios = [0.12, 0.25, 0.28, 0.35]
    else:
        ratios = [1 / count] * count
    if '优先级' in rows[0][0] and count == 3:
        ratios = [0.10, 0.40, 0.50]
    if rows[0][0] == '时间' and count == 3:
        ratios = [0.17, 0.37, 0.46]
    rendered = [[Paragraph(inline(cell), styles['header_cell' if index == 0 else 'cell']) for cell in row] for index, row in enumerate(rows)]
    table = Table(rendered, colWidths=[WIDTH * ratio for ratio in ratios], repeatRows=1,
                  hAlign='LEFT', spaceBefore=4, spaceAfter=13)
    commands = [
        ('BACKGROUND', (0, 0), (-1, 0), INK),
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 8),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 8),
        ('LINEBELOW', (0, 0), (-1, 0), 0.6, LINE),
        ('BOX', (0, 0), (-1, -1), 0.5, LINE),
    ]
    for row in range(1, len(rows)):
        commands.extend([
            ('BACKGROUND', (0, row), (-1, row), colors.HexColor('#F4F8FB') if row % 2 == 0 else PAPER),
            ('LINEBELOW', (0, row), (-1, row), 0.4, LINE),
        ])
    table.setStyle(TableStyle(commands))
    return table


def build_story():
    story = []
    story.append(Spacer(1, 20))
    story.append(Paragraph('MAGICCHIP / PROJECT CASE STUDY', styles['cover_label']))
    story.append(Paragraph('企业硬件官网<br/>项目介绍与面试讲述稿', styles['cover_title']))
    story.append(Paragraph('技术架构 · 产品建模 · 交互设计 · 工程验证', styles['cover_deck']))
    story.append(HRFlowable(width='100%', thickness=2, color=BLUE, spaceAfter=18))
    hero_path = SOURCE.parent / 'images' / '01-home.jpg'
    with PILImage.open(hero_path) as im:
        iw, ih = im.size
    story.append(Image(str(hero_path), width=WIDTH, height=WIDTH * ih / iw))
    story.append(Spacer(1, 18))
    story.append(Paragraph('一套围绕「产品发现 → 参数选型 → 资料核对 → 联系销售」构建的多语言 B2B 官网。', styles['cover_deck']))
    metric_style = ParagraphStyle('Metric', parent=styles['body'], fontSize=10.5, leading=18,
                                  alignment=TA_CENTER, textColor=BLUE, spaceAfter=0)
    metrics = Table([[Paragraph('<b>5</b> 种语言', metric_style), Paragraph('<b>4</b> 类产品', metric_style), Paragraph('<b>164</b> 个产品 / SKU 搜索条目', metric_style)]], colWidths=[WIDTH * .25, WIDTH * .25, WIDTH * .5])
    metrics.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, -1), LIGHT), ('TOPPADDING', (0, 0), (-1, -1), 12), ('BOTTOMPADDING', (0, 0), (-1, -1), 12)]))
    story.append(metrics)
    story.append(Spacer(1, 17))
    story.append(Paragraph('源码核对：2026-10-19 · 本地截图与架构示意 · 配套 Markdown 阅读版', styles['small']))
    story.append(Paragraph('第一人称为讲述示例；个人职责、团队分工与投入时间，应按实际经历表达。内容区分已实现能力与后续规划。', styles['small']))
    story.append(Paragraph('阅读方式：第 1 节用于开场；第 6-9、12-13 节用于技术展开；第 18 节提供面试追问与回答示例。', styles['small']))
    story.append(PageBreak())

    toc_title = Paragraph('目录', styles['h2'])
    story.append(toc_title)
    story.append(Paragraph('点击标题或页码可跳转，也可使用 PDF 阅读器的章节书签。', styles['small']))
    toc = TableOfContents()
    toc.levelStyles = [ParagraphStyle('TOC', fontName=FONT, fontSize=10.1, leading=15,
                                      leftIndent=0, firstLineIndent=0, rightIndent=25,
                                      textColor=INK, spaceBefore=2, wordWrap='CJK')]
    toc.dotsMinLevel = 0
    story.append(toc)
    story.append(PageBreak())

    lines = SOURCE.read_text(encoding='utf-8').splitlines()
    start = next(index for index, line in enumerate(lines) if '<a id="pitch"' in line)
    i = start
    pending_anchor = None
    section_id = ''
    subsection_count = 0
    picture_number = 0
    while i < len(lines):
        line = lines[i].strip()
        if not line:
            i += 1
            continue
        anchor = re.fullmatch(r'<a id="([^"]+)"></a>', line)
        if anchor:
            pending_anchor = anchor.group(1)
            i += 1
            continue
        if line.startswith('```'):
            code_lines = []
            i += 1
            while i < len(lines) and not lines[i].strip().startswith('```'):
                code_lines.append(lines[i])
                i += 1
            story.append(code_block(code_lines))
            i += 1
            continue
        if line.startswith('|'):
            table_lines = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                table_lines.append(lines[i])
                i += 1
            story.append(table_block(table_lines))
            continue
        if line.startswith('## '):
            section_id = pending_anchor or f'section-{i}'
            pending_anchor = None
            subsection_count = 0
            story.append(heading(line[3:], section_id))
            i += 1
            continue
        if line.startswith('### '):
            subsection_count += 1
            story.append(heading(line[4:], f'{section_id}-sub-{subsection_count}', subsection=True))
            i += 1
            continue
        img = re.fullmatch(r'!\[([^\]]*)\]\(([^)]+)\)', line)
        if img:
            picture_number += 1
            story.append(image_block(f'图 {picture_number} · {img.group(1)}', img.group(2)))
            i += 1
            continue
        if line == '---':
            story.append(HRFlowable(width='100%', thickness=.6, color=LINE, spaceBefore=6, spaceAfter=6))
            i += 1
            continue
        if line == '**附：配图说明**':
            note = [Paragraph('<b>附：配图说明</b>', styles['small'])]
            i += 1
            while i < len(lines) and not lines[i].strip():
                i += 1
            if i < len(lines):
                note.append(Paragraph(inline(lines[i].strip()), styles['small']))
                i += 1
            story.append(KeepTogether(note))
            continue
        if line.startswith('>'):
            quoted = []
            while i < len(lines) and lines[i].strip().startswith('>'):
                quoted.append(lines[i].strip().lstrip('>').strip())
                i += 1
            story.append(Paragraph(inline(' '.join(quoted)), styles['quote']))
            continue
        bullet = re.match(r'^(?:- |(\d+)\. )(.+)$', line)
        if bullet:
            bullet_style = ParagraphStyle('Bullet', parent=styles['body'], leftIndent=13,
                                          firstLineIndent=0, bulletIndent=0, bulletFontName=FONT,
                                          bulletFontSize=9.5, spaceAfter=6)
            mark = f'{bullet.group(1)}.' if bullet.group(1) else '•'
            story.append(Paragraph(inline(bullet.group(2)), bullet_style, bulletText=mark))
            i += 1
            continue
        paragraph = [line]
        i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r'^(#{1,3} |```|\||!\[|<a |---$|> |- |\d+\. )', lines[i].strip()):
            paragraph.append(lines[i].strip())
            i += 1
        story.append(Paragraph(inline(' '.join(paragraph)), styles['body']))
    # Keep headings with enough of a following table or figure to be useful.
    # A whole multi-page table cannot be kept with its heading as one unit.
    polished = []
    for index, flowable in enumerate(story):
        is_heading = isinstance(flowable, Paragraph) and getattr(flowable, '_bookmark', None)
        previous_heading = index > 0 and isinstance(story[index - 1], Paragraph) and getattr(story[index - 1], '_bookmark', None)
        if is_heading and not previous_heading:
            next_index = index + 1
            heading_count = 1
            while next_index < len(story) and isinstance(story[next_index], Paragraph) and getattr(story[next_index], '_bookmark', None):
                heading_count += 1
                next_index += 1
            following = story[next_index] if next_index < len(story) else None
            heading_allowance = 45 + heading_count * 22
            minimum = heading_allowance + 35
            if isinstance(following, Table):
                following.wrap(WIDTH, HEIGHT)
                if len(following._rowHeights) == 1:
                    minimum = min(HEIGHT - 20, following._height + heading_allowance)
                else:
                    minimum = min(HEIGHT - 20, sum(following._rowHeights[:3]) + heading_allowance)
            elif isinstance(following, KeepTogether):
                minimum = 395 + heading_count * 22
            polished.append(CondPageBreak(minimum))
        polished.append(flowable)
    return polished


if __name__ == '__main__':
    document = IntroDoc(OUTPUT)
    document.multiBuild(build_story())
    reader = PdfReader(OUTPUT)
    page_text = [page.extract_text() or '' for page in reader.pages]
    all_text = '\n'.join(page_text)
    required = ['两分钟项目介绍', '技术栈与选型理由', 'MCAIPC2', 'Intel 9-36V', 'GA4', '面试追问与回答示例', '演示顺序与源码索引']
    missing = [text for text in required if text not in all_text]
    if missing:
        raise ValueError(f'Missing expected document content: {missing}')
    shutil.copy2(OUTPUT, COMPANION)
    summary = {
        'canonical': str(OUTPUT), 'companion': str(COMPANION),
        'pages': len(reader.pages), 'bytes': OUTPUT.stat().st_size,
        'outline_top_level': len([item for item in reader.outline if isinstance(item, dict)]),
        'annotations': sum(len(page.get('/Annots', [])) for page in reader.pages),
        'page_characters': [len(text) for text in page_text],
        'missing_required_text': missing,
    }
    (WORK / 'validation.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding='utf-8')
    print(json.dumps(summary, ensure_ascii=False, indent=2))
