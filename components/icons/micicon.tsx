const MicIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <style>{`
      .scan-m{animation:scanm 2s linear infinite}
      @keyframes scanm{0%{opacity:0;transform:translateY(-8px)}30%{opacity:1}70%{opacity:1}100%{opacity:0;transform:translateY(8px)}}
      .blink-m{animation:blinkm 1.5s ease-in-out infinite}
      @keyframes blinkm{0%,100%{opacity:1}50%{opacity:0.2}}
    `}</style>
    <clipPath id="mic-clip"><rect x="8" y="3" width="8" height="11" rx="4"/></clipPath>
    <rect x="8" y="3" width="8" height="11" rx="4" stroke="#00e5ff" strokeWidth="1.8"/>
    <line className="scan-m" x1="7" y1="8" x2="17" y2="8" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" clipPath="url(#mic-clip)" opacity="0.8"/>
    <path d="M5 11c0 3.9 3.1 7 7 7s7-3.1 7-7" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="12" y1="18" x2="12" y2="21" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="9" y1="21" x2="15" y2="21" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
    <circle className="blink-m" cx="19" cy="5" r="2" fill="#00e5ff" opacity="0.7"/>
  </svg>
);

export default MicIcon;