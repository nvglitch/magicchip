type NamedProduct = { id: string; name: string };

// Explicit navigation families; product records and detail URLs remain independent.
const families: Record<string, string[]> = {
  MCIPCB1: ['MCIPCB1A', 'MCIPCB1B', 'MCIPCB1F'],
  MCIPCB2: ['MCIPCB2-D3', 'MCIPCB2-D4', 'MCIPCB2-J5005'],
  MCIPCB6: ['MCIPCB6', 'MCIPCB6-DDR3L', 'MCIPCB6-DDR4'],
  MCIPCB13: ['MCIPCB13A', 'MCIPCB13B'],
  MCIPCB14: ['MCIPCB14', 'MCIPCB14F'],
  MCIPCB15: ['MCIPCB15A', 'MCIPCB15B', 'MCIPCB15C', 'MCIPCB15D', 'MCIPCB15E'],
  MCIPCB16: ['MCIPCB16A', 'MCIPCB16B'],
  MCIPCD5: ['MCIPCD5', 'MCIPCD5F'],
  MCNAS14: ['MCNAS14A', 'MCNAS14B'],
  MCAIPC3: ['MCAIPC3A', 'MCAIPC3B', 'MCAIPC3C', 'MCAIPC3D'],
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
