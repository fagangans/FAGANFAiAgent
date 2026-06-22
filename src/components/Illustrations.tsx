type Props = { className?: string };

/* Step 1 — Connect WhatsApp */
export function ConnectIllustration({ className = "h-40 w-full" }: Props) {
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="Hubungkan WhatsApp">
      <defs>
        <linearGradient id="ill1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect x="20" y="30" width="120" height="120" rx="18" fill="#ecfdf5" />
      <rect x="180" y="30" width="120" height="120" rx="18" fill="#f0fdfa" />
      <circle cx="80" cy="90" r="34" fill="url(#ill1)" />
      <path
        d="M80 70c-11 0-20 9-20 20 0 4 1 7 3 10l-2 8 8-2c3 2 7 3 11 3 11 0 20-9 20-20s-9-19-20-19z"
        fill="#fff"
      />
      <circle cx="240" cy="90" r="30" fill="#fff" stroke="#5eead4" strokeWidth="3" />
      <path d="M228 90l8 8 16-16" stroke="#0d9488" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M118 90h84" stroke="#34d399" strokeWidth="4" strokeDasharray="6 7" strokeLinecap="round" />
    </svg>
  );
}

/* Step 2 — Train the AI */
export function TrainIllustration({ className = "h-40 w-full" }: Props) {
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="Latih AI">
      <defs>
        <linearGradient id="ill2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect x="40" y="36" width="240" height="108" rx="16" fill="#ecfdf5" />
      <circle cx="160" cy="86" r="40" fill="url(#ill2)" />
      <rect x="142" y="68" width="36" height="30" rx="8" fill="#fff" />
      <circle cx="152" cy="82" r="4" fill="#0d9488" />
      <circle cx="168" cy="82" r="4" fill="#0d9488" />
      <rect x="156" y="58" width="8" height="12" rx="4" fill="#fff" />
      <circle cx="160" cy="56" r="5" fill="#fff" />
      <path d="M120 86h-18M218 86h18M160 130v16" stroke="#5eead4" strokeWidth="5" strokeLinecap="round" />
      <circle cx="96" cy="86" r="7" fill="#34d399" />
      <circle cx="240" cy="86" r="7" fill="#34d399" />
      <circle cx="160" cy="150" r="7" fill="#34d399" />
    </svg>
  );
}

/* Step 3 — Go live / automate */
export function LaunchIllustration({ className = "h-40 w-full" }: Props) {
  return (
    <svg viewBox="0 0 320 180" className={className} role="img" aria-label="Otomasi berjalan">
      <defs>
        <linearGradient id="ill3" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect x="40" y="36" width="240" height="108" rx="16" fill="#f0fdfa" />
      <path d="M160 50c20 8 30 26 30 50l-12 14h-36l-12-14c0-24 10-42 30-50z" fill="url(#ill3)" />
      <circle cx="160" cy="92" r="10" fill="#fff" />
      <path d="M150 120l-12 18 16-4 4 14 10-26z" fill="#5eead4" />
      <path d="M170 120l12 18-16-4-4 14-10-26z" fill="#5eead4" />
      <circle cx="92" cy="70" r="5" fill="#34d399" />
      <circle cx="232" cy="120" r="6" fill="#34d399" />
      <circle cx="240" cy="64" r="4" fill="#5eead4" />
    </svg>
  );
}

export const STEP_ILLUSTRATIONS = [ConnectIllustration, TrainIllustration, LaunchIllustration];

/* Big feature showcase illustration (AI replying) */
export function AiReplyIllustration({ className = "h-full w-full" }: Props) {
  return (
    <svg viewBox="0 0 400 320" className={className} role="img" aria-label="AI membalas pelanggan otomatis">
      <defs>
        <linearGradient id="feat" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#34d399" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="360" height="280" rx="24" fill="#ecfdf5" />
      {/* phone */}
      <rect x="120" y="50" width="160" height="220" rx="22" fill="#fff" stroke="#d1fae5" strokeWidth="3" />
      <rect x="140" y="78" width="120" height="20" rx="10" fill="#ecfdf5" />
      <rect x="140" y="112" width="84" height="18" rx="9" fill="#f1f5f9" />
      <rect x="176" y="140" width="84" height="18" rx="9" fill="#d1fae5" />
      <rect x="140" y="168" width="100" height="18" rx="9" fill="#f1f5f9" />
      <rect x="176" y="196" width="84" height="18" rx="9" fill="#d1fae5" />
      {/* AI bubble badge */}
      <circle cx="300" cy="120" r="34" fill="url(#feat)" />
      <rect x="286" y="106" width="28" height="22" rx="6" fill="#fff" />
      <circle cx="294" cy="117" r="3" fill="#0d9488" />
      <circle cx="306" cy="117" r="3" fill="#0d9488" />
      <rect x="298" y="98" width="4" height="9" rx="2" fill="#fff" />
      {/* spark */}
      <path d="M92 90l5 12 12 5-12 5-5 12-5-12-12-5 12-5z" fill="#5eead4" />
      <circle cx="86" cy="220" r="8" fill="#34d399" />
    </svg>
  );
}
