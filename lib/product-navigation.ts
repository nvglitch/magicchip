type NamedProduct = { id: string; name: string };

// These remaining families have independent product detail pages.
const families: Record<string, string[]> = {
  MCIPCB2: ['MCIPCB2', 'MCIPCB2-J5005'],
  MCNAS14: ['MCNAS14A', 'MCNAS14B'],
};

const modelOrder = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });
export const compareModelNames = (a: { name: string }, b: { name: string }) => modelOrder.compare(a.name, b.name);

export function groupProductNavigation<T extends NamedProduct>(products: readonly T[]) {
  const groups = new Map<string, { name: string; models: T[] }>();
  for (const product of products) {
    const name = Object.entries(families).find(([, members]) => members.includes(product.name))?.[0] ?? product.name;
    const group = groups.get(name) ?? { name, models: [] };
    group.models.push(product);
    groups.set(name, group);
  }
  return [...groups.values()].sort(compareModelNames).map(group => ({ ...group, models: [...group.models].sort(compareModelNames) }));
}
