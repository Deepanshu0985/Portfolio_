import { site } from "@/content/site";

/** Brand mark: a "D" monogram with an AI spark, plus the wordmark. */
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
        d="M12 11h7.5c6.2 0 10.5 3.8 10.5 9s-4.3 9-10.5 9H12V11z"
        fill="none"
        stroke="white"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="20" r="2.6" fill="white" />
      <path d="M20 14.5v2.2M20 23.3v2.2M14.5 20h2.2M23.3 20h2.2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-lg font-bold tracking-tight text-white">
        {site.brand}
        <span className="gradient-text">{site.brandSuffix}</span>
      </span>
    </span>
  );
}
