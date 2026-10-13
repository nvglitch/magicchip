// Confirmed renamed / merged SR models. MCSR613U stays available while N4 is deferred.
export const firewallProductAliases: Record<string, string> = {
  'mc30s-ddr4': '/products/firewall-mini-pc/mc30s#sku-ddr4',
  'mc30s-n100': '/products/firewall-mini-pc/mc30s#sku-ddr5',
  'mc30w-n100': '/products/firewall-mini-pc/mc30w',
  'mcsr6n12u': '/products/firewall-mini-pc/mcsr6n1',
  'mcsr6n13u': '/products/firewall-mini-pc/mcsr6n2',
  'mgsrn100-v1': '/products/firewall-mini-pc/mgsrn100',
};

export const firewallLegacyNames: Record<string, string[]> = {
  mc30s: ['MC30S DDR4', 'MC30S N100'],
  mc30w: ['MC30W N100'],
  mcsr6n1: ['MCSR6N12U'],
  mcsr6n2: ['MCSR6N13U'],
  mgsrn100: ['MGSRN100-V1'],
};
