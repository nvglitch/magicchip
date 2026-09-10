import Link from 'next/link';
import { groupProductNavigation } from '@/lib/product-navigation';

export function ModelFamilyLinks({ models, category }: { models: { id: string; name: string }[]; category: string }) {
  return <div className="grid items-start gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    {groupProductNavigation(models).map(group => group.models.length === 1 ? (
      <Link key={group.name} href={`/products/${category}/${group.models[0].id}`} className="flex min-h-12 items-center justify-between gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 font-semibold text-blue-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transform-none motion-reduce:transition-none"><span className="break-all">{group.name}</span><span aria-hidden="true">↗</span></Link>
    ) : (
      <details key={group.name} className="group rounded-xl border border-blue-200 bg-blue-50 text-blue-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md open:bg-white motion-reduce:transform-none motion-reduce:transition-none">
        <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-2 rounded-xl px-4 py-3 font-semibold transition-colors duration-200 hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 [&::-webkit-details-marker]:hidden"><span>{group.name}<span className="ml-2 text-xs font-normal text-slate-500">({group.models.length})</span></span><span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span></summary>
        <div className="border-t border-blue-100 p-2">{group.models.map(model => <Link key={model.id} href={`/products/${category}/${model.id}`} className="flex items-center justify-between gap-2 rounded-lg px-2 py-3 text-sm font-semibold transition-all duration-200 hover:translate-x-1 hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-600 motion-reduce:transform-none motion-reduce:transition-none"><span className="break-all">{model.name}</span><span aria-hidden="true">↗</span></Link>)}</div>
      </details>
    ))}
  </div>;
}

type CardProduct = { id: string; name: string; image: string; tagline: string };
export function AiFamilyCards({ products }: { products: CardProduct[] }) {
  return <div className="grid items-start gap-4 md:grid-cols-3">
    {groupProductNavigation(products).map(group => {
      const product = group.models[0];
      const multiple = group.models.length > 1;
      const content = <><img src={product.image} alt={multiple ? `${group.name} representative configuration` : product.name} className="aspect-[4/3] w-full object-contain p-4 transition-transform duration-500 group-hover/card:scale-105 motion-reduce:transform-none motion-reduce:transition-none" /><div className="border-t border-slate-100 p-4"><h3 className="font-bold text-slate-950">{group.name}{multiple ? ' Series' : ''}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{multiple ? 'AMD and Intel platforms · 4 configurations' : product.tagline}</p>{multiple && <p className="mt-2 text-xs text-slate-400">Representative image; appearance varies by configuration.</p>}</div></>;
      return <article key={group.name} className="group/card overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/10 motion-reduce:transform-none motion-reduce:transition-none">
        {multiple ? content : <Link href={`/products/ai-mini-pc/${product.id}`} className="block transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-blue-600">{content}</Link>}
        {multiple && <div className="flex flex-wrap gap-2 px-4 pb-4">{group.models.map(model => <Link key={model.id} href={`/products/ai-mini-pc/${model.id}`} aria-label={model.name} className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 motion-reduce:transform-none motion-reduce:transition-none">{model.name.replace('MCAIPC', '')} ↗</Link>)}</div>}
      </article>;
    })}
  </div>;
}
