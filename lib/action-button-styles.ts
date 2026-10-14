// Shared with the home page's blue actions; variants only change the palette.
const layout = 'group inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold leading-6 shadow-lg transition-all duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70';

export const whatsappButtonColors = 'bg-emerald-600 text-white hover:bg-emerald-700';

export const actionButtonStyles = {
  primary: `${layout} bg-blue-600 text-white shadow-blue-600/20 hover:bg-blue-700`,
  whatsapp: `${layout} ${whatsappButtonColors} shadow-emerald-600/20`,
} as const;
