export default function CircuitDivider() {
  return (
    <div className="relative h-10 w-full overflow-hidden bg-[#f3f7f5]" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full opacity-70"
        viewBox="0 0 1440 40"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 12H340L365 32H520" stroke="url(#divider-left)" strokeWidth="1.25" />
        <circle cx="520" cy="32" r="2" fill="var(--brand-blue)" />
        <path d="M1440 10H1100L1075 30H920" stroke="url(#divider-right)" strokeWidth="1.25" />
        <circle cx="920" cy="30" r="2" fill="var(--brand-blue)" />
        <defs>
          <linearGradient id="divider-left" x1="0" y1="0" x2="520" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-blue-300)" stopOpacity="0" />
            <stop offset="0.55" stopColor="var(--color-blue-300)" stopOpacity="0.65" />
            <stop offset="1" stopColor="var(--brand-blue)" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="divider-right" x1="1440" y1="0" x2="920" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="var(--color-blue-300)" stopOpacity="0" />
            <stop offset="0.55" stopColor="var(--color-blue-300)" stopOpacity="0.65" />
            <stop offset="1" stopColor="var(--brand-blue)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}