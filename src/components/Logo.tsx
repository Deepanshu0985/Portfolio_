import { site } from "@/content/site";

/** Brand mark: an "N" monogram with an AI spark, plus the wordmark. */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="url(#logo-gradient)" />
      <path
        d="M11 29V11l15 18V11"
        fill="none"
        stroke="white"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M32 4.5l1.1 2.4 2.4 1.1-2.4 1.1L32 11.5l-1.1-2.4-2.4-1.1 2.4-1.1z" fill="white" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-lg font-bold tracking-tight text-white">
        {site.brand} <span className="gradient-text">{site.brandSuffix}</span>
      </span>
    </span>
  );
}
