const BrainIcon = ({ size = 48 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <style>{`
      .scan-br{animation:scanbr 2s linear infinite}
      @keyframes scanbr{0%{opacity:0;transform:translateY(-12px)}30%{opacity:1}70%{opacity:1}100%{opacity:0;transform:translateY(12px)}}
    `}</style>
        <clipPath id="br-full"><rect x="5" y="10" width="90" height="80" /></clipPath>
        {/* left lobe */}
        <path d="M50 20 C50 20 35 20 28 28 C22 35 22 42 25 48 C20 52 18 58 20 64 C22 72 30 78 38 78 L50 78 L50 20" stroke="#00e5ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M28 28 C24 22 20 20 16 22" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M25 48 C20 46 15 48 14 54" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M33 40 C38 36 44 36 48 40" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
        <path d="M30 58 C36 54 44 54 48 58" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
        {/* right lobe */}
        <path d="M50 20 C50 20 65 20 72 28 C78 35 78 42 75 48 C80 52 82 58 80 64 C78 72 70 78 62 78 L50 78 L50 20" stroke="#00e5ff" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M72 28 C76 22 80 20 84 22" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M75 48 C80 46 85 48 86 54" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M67 40 C62 36 56 36 52 40" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
        <path d="M70 58 C64 54 56 54 52 58" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.45" />
        {/* stem */}
        <line x1="50" y1="78" x2="50" y2="88" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" />
        <line x1="40" y1="88" x2="60" y2="88" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" />
        {/* divider */}
        <line x1="50" y1="20" x2="50" y2="78" stroke="#00e5ff" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
        {/* scan */}
        <line className="scan-br" x1="10" y1="50" x2="90" y2="50" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" clipPath="url(#br-full)" opacity="0.6" />
    </svg>
);

export default BrainIcon;