type Props = { className?: string };

/* Step 1 — Connect WhatsApp */
export function ConnectIllustration({ className = "h-40 w-full" }: Props) {
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="Hubungkan WhatsApp">
      <defs>
        <linearGradient id="ill1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="120" height="120" rx="18" fill="#fff7ed" />
      <rect x="180" y="30" width="120" height="120" rx="18" fill="#fffbeb" />
      <circle cx="80" cy="90" r="34" fill="url(#ill1)" />
      <path
        d="M80 70c-11 0-20 9-20 20 0 4 1 7 3 10l-2 8 8-2c3 2 7 3 11 3 11 0 20-9 20-20s-9-19-20-19z"
        fill="#fff"
      />
      <circle cx="240" cy="90" r="30" fill="#fff" stroke="#fdba74" strokeWidth="3" />
      <path d="M228 90l8 8 16-16" stroke="#ea580c" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M118 90h84" stroke="#fb923c" strokeWidth="4" strokeDasharray="6 7" strokeLinecap="round" />
    </svg>
  );
}

/* Step 2 — Train the AI */
export function TrainIllustration({ className = "h-40 w-full" }: Props) {
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="Latih AI">
      <defs>
        <linearGradient id="ill2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect x="40" y="36" width="240" height="108" rx="16" fill="#fff7ed" />
      <circle cx="160" cy="86" r="40" fill="url(#ill2)" />
      <rect x="142" y="68" width="36" height="30" rx="8" fill="#fff" />
      <circle cx="152" cy="82" r="4" fill="#ea580c" />
      <circle cx="168" cy="82" r="4" fill="#ea580c" />
      <rect x="156" y="58" width="8" height="12" rx="4" fill="#fff" />
      <circle cx="160" cy="56" r="5" fill="#fff" />
      <path d="M120 86h-18M218 86h18M160 130v16" stroke="#fdba74" strokeWidth="5" strokeLinecap="round" />
      <circle cx="96" cy="86" r="7" fill="#fb923c" />
      <circle cx="240" cy="86" r="7" fill="#fb923c" />
      <circle cx="160" cy="150" r="7" fill="#fb923c" />
    </svg>
  );
}

/* Step 3 — Go live / automate */
export function LaunchIllustration({ className = "h-40 w-full" }: Props) {
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="Otomasi berjalan">
      <defs>
        <linearGradient id="ill3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect x="40" y="36" width="240" height="108" rx="16" fill="#fffbeb" />
      <path d="M160 50c20 8 30 26 30 50l-12 14h-36l-12-14c0-24 10-42 30-50z" fill="url(#ill3)" />
      <circle cx="160" cy="92" r="10" fill="#fff" />
      <path d="M150 120l-12 18 16-4 4 14 10-26z" fill="#fdba74" />
      <path d="M170 120l12 18-16-4-4 14-10-26z" fill="#fdba74" />
      <circle cx="92" cy="70" r="5" fill="#fb923c" />
      <circle cx="232" cy="120" r="6" fill="#fb923c" />
      <circle cx="240" cy="64" r="4" fill="#fdba74" />
    </svg>
  );
}

export const STEP_ILLUSTRATIONS = [ConnectIllustration, TrainIllustration, LaunchIllustration];

/* About page — growth / mission illustration */
export function GrowthIllustration({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 400 280" className={className} role="img" aria-label="Pertumbuhan bisnis bersama FAiAgent">
      <defs>
        <linearGradient id="growth" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="360" height="240" rx="24" fill="#fff7ed" />
      <path d="M60 210V150M120 210V120M180 210V90M240 210V60M300 210V100" stroke="#fed7aa" strokeWidth="22" strokeLinecap="round" />
      <path
        d="M50 150 L120 110 L180 80 L240 50 L310 90"
        stroke="url(#growth)"
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="240" cy="50" r="10" fill="url(#growth)" />
      <circle cx="120" cy="170" r="16" fill="#fff" stroke="#fb923c" strokeWidth="3" />
      <circle cx="280" cy="190" r="16" fill="#fff" stroke="#fb923c" strokeWidth="3" />
      <circle cx="200" cy="200" r="16" fill="#fff" stroke="#fb923c" strokeWidth="3" />
    </svg>
  );
}

/* Big feature showcase illustration (AI replying) */
export function AiReplyIllustration({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="AI membalas pelanggan otomatis">
      <defs>
        <linearGradient id="feat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fb923c" />
          <stop offset="1" stopColor="#ea580c" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="360" height="280" rx="24" fill="#fff7ed" />
      {/* phone */}
      <rect x="120" y="50" width="160" height="220" rx="22" fill="#fff" stroke="#ffedd5" strokeWidth="3" />
      <rect x="140" y="78" width="120" height="20" rx="10" fill="#fff7ed" />
      <rect x="140" y="112" width="84" height="18" rx="9" fill="#f1f5f9" />
      <rect x="176" y="140" width="84" height="18" rx="9" fill="#ffedd5" />
      <rect x="140" y="168" width="100" height="18" rx="9" fill="#f1f5f9" />
      <rect x="176" y="196" width="84" height="18" rx="9" fill="#ffedd5" />
      {/* AI bubble badge */}
      <circle cx="300" cy="120" r="34" fill="url(#feat)" />
      <rect x="286" y="106" width="28" height="22" rx="6" fill="#fff" />
      <circle cx="294" cy="117" r="3" fill="#ea580c" />
      <circle cx="306" cy="117" r="3" fill="#ea580c" />
      <rect x="298" y="98" width="4" height="9" rx="2" fill="#fff" />
      {/* spark */}
      <path d="M92 90l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#fdba74" />
      <circle cx="86" cy="220" r="8" fill="#fb923c" />
    </svg>
  );
}
