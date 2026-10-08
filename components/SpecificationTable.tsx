import type { ProductSpecification } from '@/lib/product-specifications';

type SpecificationTableProps = {
  title: string;
  specs: readonly ProductSpecification[];
  subtitle?: string;
  framed?: boolean;
  compact?: boolean;
  standalone?: boolean;
};

export default function SpecificationTable({ title, specs, subtitle, framed = true, compact = false, standalone = false }: SpecificationTableProps) {
  return (
    <div className={`min-w-0 overflow-hidden bg-white ${framed ? 'rounded-xl border border-blue-200' : ''}`}>
      <div className={`border-b border-blue-100 bg-[#172033] text-white ${standalone ? 'px-6 py-6 md:px-8' : 'px-6 py-5'}`}>
        <h3 className={`${standalone ? 'text-2xl' : 'text-xl'} font-bold`}>{title}</h3>
        {subtitle && <p className="mt-2 text-sm leading-relaxed text-blue-100">{subtitle}</p>}
      </div>
      <dl className="divide-y divide-blue-100">
        {specs.map((item, index) => (
          <div key={`${item.label}-${index}`} className={`grid even:bg-blue-50/40 ${standalone ? 'grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)]' : `gap-1 px-6 py-3.5 ${compact ? 'sm:grid-cols-[100px_minmax(0,1fr)] sm:gap-4' : 'sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-5'}`}`}>
            <dt className={`break-words text-sm text-slate-700 ${standalone ? 'flex items-center gap-3 border-b border-blue-100 px-5 py-4 font-bold uppercase tracking-normal md:border-b-0 md:border-r md:px-6' : 'font-semibold'}`}>
              {standalone &&
                <span aria-hidden="true" className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white text-[11px] font-bold text-slate-500 ring-1 ring-blue-200">{String(index + 1).padStart(2, '0')}</span>
              }
              {item.label}
            </dt>
            <dd className={`min-w-0 break-words leading-relaxed text-slate-800 ${standalone ? 'px-5 py-4 text-base md:px-7' : 'text-sm'}`}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
