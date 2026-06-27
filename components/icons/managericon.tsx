const ManagerIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <style>{`
      .scan-mg{animation:scanmg 2s linear infinite}
      @keyframes scanmg{0%{opacity:0;transform:translateY(-8px)}30%{opacity:1}70%{opacity:1}100%{opacity:0;transform:translateY(8px)}}
      .blink-mg{animation:blinkmg 1.5s ease-in-out infinite}
      @keyframes blinkmg{0%,100%{opacity:1}50%{opacity:0.2}}
    `}</style>
    <clipPath id="mgr-clip"><circle cx="12" cy="8" r="4"/></clipPath>
    <circle cx="12" cy="8" r="4" stroke="#00e5ff" strokeWidth="1.8"/>
    <line className="scan-mg" x1="7" y1="8" x2="17" y2="8" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" clipPath="url(#mgr-clip)" opacity="0.8"/>
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M11 13l1 3 1-3" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
    <circle className="blink-mg" cx="18" cy="6" r="2.5" fill="#00e5ff" opacity="0.15" stroke="#00e5ff" strokeWidth="1"/>
  </svg>
);

export default ManagerIcon;