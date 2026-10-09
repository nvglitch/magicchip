import { aiCatalog } from '@/lib/ai-catalog';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { industrialCatalog } from '@/lib/industrial-catalog';
import { modelThumbnails } from '@/lib/model-thumbnails';
import mcai1 from '@/content/products/items/mcai1.json';
import mc15uh from '@/content/products/items/mc15uh.json';

export const scenarioIds = [
  'industrialAutomation', 'edgeAi', 'networkSecurity', 'digitalSignage',
  'businessEducation', 'iotGateway', 'panelPc', 'nasStorage',
] as const;
export type ScenarioId = typeof scenarioIds[number];

export type ScenarioProduct = {
  id: string;
  category: string;
  name: string;
  image: string;
  href: string;
};

type ScenarioCategory = 'industrial-mini-pc' | 'ai-mini-pc' | 'commercial-mini-pc' | 'firewall-mini-pc';
type ScenarioModel = Pick<ScenarioProduct, 'id' | 'name' | 'image'> & {
  skus?: { key: string; image: string; legacyNames: string[] }[];
};
const catalogs: Record<ScenarioCategory, ScenarioModel[]> = {
  'industrial-mini-pc': industrialCatalog,
  'ai-mini-pc': [...aiCatalog, { ...mcai1, image: mcai1.images[0] }],
  'commercial-mini-pc': [...commercialCatalog, { ...mc15uh, image: mc15uh.images[0] }],
  'firewall-mini-pc': firewallCatalog,
};

function product(category: keyof typeof catalogs, id: string, sku?: string): ScenarioProduct {
  const model = catalogs[category].find(item => item.id === id);
  if (!model) throw new Error(`Unknown scenario model: ${category}/${id}`);
  const selected = sku ? model.skus?.find(item => item.key === sku) : undefined;
  if (sku && !selected) throw new Error(`Unknown scenario configuration: ${id}/${sku}`);
  const name = selected?.legacyNames[0] || model.name;
  return {
    id, category, name,
    image: modelThumbnails[name.toLowerCase()]?.image ?? selected?.image ?? modelThumbnails[id]?.image ?? model.image,
    href: `/products/${category}/${id}${sku ? `#sku-${sku}` : ''}`,
  };
}

// Order also matches the localized recommendation reasons. Resolve models from
// the current catalogs so renamed/merged pages cannot silently leave stale links.
export const scenarios: { id: ScenarioId; products: ScenarioProduct[]; keywords: string[] }[] = [
  {
    id: 'industrialAutomation',
    products: [product('industrial-mini-pc', 'mcipcb13'), product('industrial-mini-pc', 'mcipcb15'), product('industrial-mini-pc', 'mcipc2', 'type-b')],
    keywords: ['machine control', 'factory', 'automation', 'industrial edge', 'serial', 'rs485', 'plc'],
  },
  {
    id: 'edgeAi',
    products: [product('ai-mini-pc', 'mcai1'), product('ai-mini-pc', 'mcai2'), product('ai-mini-pc', 'mcaipc3')],
    keywords: ['ai workstation', 'local model', 'local llm', 'edge inference', 'professional compute', 'npu'],
  },
  {
    id: 'networkSecurity',
    products: [product('firewall-mini-pc', 'mc30s-n100'), product('firewall-mini-pc', 'mcr20'), product('firewall-mini-pc', 'mc14n-1u6l')],
    keywords: ['network security', 'router', 'vpn', 'firewall', 'sd-wan', 'multi wan', 'rackmount'],
  },
  {
    id: 'digitalSignage',
    products: [product('industrial-mini-pc', 'mcipcb12'), product('commercial-mini-pc', 'mcn7a'), product('commercial-mini-pc', 'mc15uh')],
    keywords: ['display', 'signage', 'multi screen', 'kiosk', 'control room'],
  },
  {
    id: 'businessEducation',
    products: [product('commercial-mini-pc', 'mc12'), product('commercial-mini-pc', 'mcn7p'), product('commercial-mini-pc', 'mc15uh')],
    keywords: ['office', 'classroom', 'meeting', 'desktop', 'education'],
  },
  {
    id: 'iotGateway',
    products: [product('industrial-mini-pc', 'mcipcd3'), product('industrial-mini-pc', 'mcipcd5'), product('firewall-mini-pc', 'mcsrp6')],
    keywords: ['iot', 'gateway', 'edge network', 'connectivity', 'data acquisition', 'telemetry'],
  },
  {
    id: 'panelPc',
    products: [product('industrial-mini-pc', 'mctpc-1501b'), product('industrial-mini-pc', 'mctpc-1501e'), product('industrial-mini-pc', 'mctpc-2105x')],
    keywords: ['hmi', 'panel pc', 'touchscreen', 'touch screen', 'operator terminal', 'tpc'],
  },
  {
    id: 'nasStorage',
    products: [product('commercial-mini-pc', 'mcnas12'), product('commercial-mini-pc', 'mcnas14a'), product('commercial-mini-pc', 'mcnas14b')],
    keywords: ['nas', 'local storage', 'file server', 'backup', 'network attached storage', 'sfp'],
  },
];
