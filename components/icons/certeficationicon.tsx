const MedalIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size * 1.1} viewBox="0 0 100 110" fill="none">
    <style>{`
      .swing-m{animation:swingm 2s ease-in-out infinite;transform-origin:50px 10px}
      @keyframes swingm{0%,100%{transform:rotate(0deg)}25%{transform:rotate(6deg)}75%{transform:rotate(-6deg)}}
      .star-m{animation:starm 3s linear infinite;transform-origin:50px 65px}
      @keyframes starm{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
      .shine-m{animation:shinem 2s ease-in-out infinite}
      @keyframes shinem{0%,100%{opacity:0}50%{opacity:1}}
      .pulse-m{animation:pulsem 2s ease-in-out infinite;transform-origin:50px 65px}
      @keyframes pulsem{0%,100%{transform:scale(1);opacity:0.2}50%{transform:scale(1.15);opacity:0.5}}
    `}</style>
    <g className="swing-m">
      <path d="M38 8 L30 35 L50 28 Z" fill="#00e5ff" opacity="0.7"/>
      <path d="M62 8 L70 35 L50 28 Z" fill="#00e5ff" opacity="0.9"/>
      <rect x="33" y="5" width="34" height="10" rx="3" fill="#00e5ff"/>
      <rect x="44" y="6" width="12" height="8" rx="2" fill="#07111f" stroke="#00e5ff" strokeWidth="1.5"/>
      <circle className="pulse-m" cx="50" cy="65" r="30" stroke="#00e5ff" strokeWidth="1.5"/>
      <circle cx="50" cy="65" r="26" stroke="#00e5ff" strokeWidth="4" fill="#07111f"/>
      <circle cx="50" cy="65" r="20" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" opacity="0.08"/>
      <polygon className="star-m" points="50,50 53,61 65,61 55,68 59,79 50,72 41,79 45,68 35,61 47,61" fill="#00e5ff" opacity="0.9"/>
      <line className="shine-m" x1="50" y1="42" x2="50" y2="38" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
      <line className="shine-m" x1="66" y1="49" x2="69" y2="46" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
      <line className="shine-m" x1="34" y1="49" x2="31" y2="46" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
    </g>
  </svg>
);

export default MedalIcon;