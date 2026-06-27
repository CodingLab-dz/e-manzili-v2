const CompanyIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none">
    <style>{`
      .w1-co{animation:wco 3s ease-in-out infinite}
      .w2-co{animation:wco 3s ease-in-out infinite 0.4s}
      .w3-co{animation:wco 3s ease-in-out infinite 0.8s}
      .w4-co{animation:wco 3s ease-in-out infinite 1.2s}
      .w5-co{animation:wco 3s ease-in-out infinite 1.6s}
      .w6-co{animation:wco 3s ease-in-out infinite 2s}
      @keyframes wco{0%,100%{fill-opacity:0.08}50%{fill-opacity:0.35}}
      .flag-co{animation:flagco 2s ease-in-out infinite;transform-origin:60px 8px}
      @keyframes flagco{0%,100%{transform:rotate(0deg)}25%{transform:rotate(6deg)}75%{transform:rotate(-4deg)}}
      .glow-co{animation:glowco 2s ease-in-out infinite}
      @keyframes glowco{0%,100%{opacity:0.06}50%{opacity:0.14}}
      .door-co{animation:doorco 2s ease-in-out infinite}
      @keyframes doorco{0%,100%{fill-opacity:0.05}50%{fill-opacity:0.15}}
    `}</style>
    <rect className="glow-co" x="15" y="18" width="70" height="75" rx="3" fill="#00e5ff"/>
    <rect x="18" y="20" width="64" height="72" rx="3" stroke="#00e5ff" strokeWidth="3" fill="#07111f"/>
    <line x1="12" y1="20" x2="88" y2="20" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="60" y1="20" x2="60" y2="8" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <g className="flag-co"><path d="M60 8 L74 12 L60 16 Z" fill="#00e5ff" opacity="0.8"/></g>
    <line x1="18" y1="52" x2="82" y2="52" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
    <line x1="18" y1="70" x2="82" y2="70" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" opacity="0.2"/>
    <rect className="w1-co" x="26" y="28" width="14" height="12" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.08"/>
    <rect className="w2-co" x="46" y="28" width="14" height="12" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.08"/>
    <rect className="w3-co" x="66" y="28" width="8" height="12" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.08"/>
    <rect className="w4-co" x="26" y="56" width="14" height="12" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.08"/>
    <rect className="w5-co" x="46" y="56" width="14" height="12" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.08"/>
    <rect className="w6-co" x="66" y="56" width="8" height="12" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.08"/>
    <rect className="door-co" x="40" y="76" width="20" height="16" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.05"/>
    <circle cx="57" cy="85" r="1.5" fill="#00e5ff" opacity="0.6"/>
    <path d="M40 78 Q50 72 60 78" stroke="#00e5ff" strokeWidth="1.5" fill="none" opacity="0.4"/>
    <line x1="8" y1="92" x2="92" y2="92" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.35"/>
    <rect x="4" y="50" width="16" height="42" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#07111f" opacity="0.7"/>
    <rect x="7" y="56" width="5" height="6" rx="1" stroke="#00e5ff" strokeWidth="1.5" fill="#00e5ff" fillOpacity="0.1"/>
    <rect x="7" y="68" width="5" height="6" rx="1" stroke="#00e5ff" strokeWidth="1.5" fill="#00e5ff" fillOpacity="0.1"/>
    <rect x="80" y="58" width="16" height="34" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#07111f" opacity="0.7"/>
    <rect x="83" y="64" width="5" height="6" rx="1" stroke="#00e5ff" strokeWidth="1.5" fill="#00e5ff" fillOpacity="0.1"/>
    <rect x="83" y="76" width="5" height="6" rx="1" stroke="#00e5ff" strokeWidth="1.5" fill="#00e5ff" fillOpacity="0.1"/>
  </svg>
);

export default CompanyIcon;