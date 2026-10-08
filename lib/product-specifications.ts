export type ProductSpecification = { label: string; value: string };

const specificationOrder = [
  'Model', 'Series', 'CPU', 'Memory', 'Graphics', 'Graphics / NPU',
  'Display', 'DisplayPort', 'Network', 'USB', 'Serial',
  'Storage', 'Storage expansion', 'Expansion', 'Power', 'Power connector',
  'Cooling', 'System', 'OS', 'Operating Environment', 'Dimensions',
];

// A selected Type overrides the shared row with the same label.
export function mergeSpecifications(shared: readonly ProductSpecification[], selected: readonly ProductSpecification[]) {
  const rows = new Map<string, ProductSpecification>();
  for (const item of [...shared, ...selected]) rows.set(item.label.toLowerCase(), item);
  const rank = (label: string) => {
    const index = specificationOrder.findIndex(item => item.toLowerCase() === label.toLowerCase());
    return index < 0 ? specificationOrder.length : index;
  };
  return [...rows.values()].sort((a, b) => rank(a.label) - rank(b.label));
}
