const NegociationIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .bbl{animation:bbl 3s ease-in-out infinite}
      @keyframes bbl{0%,100%{opacity:1;transform:translateX(0)}40%{opacity:0.3;transform:translateX(-4px)}}
      .bbr{animation:bbr 3s ease-in-out infinite 0.5s}
      @keyframes bbr{0%,100%{opacity:1;transform:translateX(0)}40%{opacity:0.3;transform:translateX(4px)}}
      .d1{animation:dp 3s ease-in-out infinite}.d2{animation:dp 3s ease-in-out infinite 0.2s}.d3{animation:dp 3s ease-in-out infinite 0.4s}
      .d1r{animation:dp 3s ease-in-out infinite 0.5s}.d2r{animation:dp 3s ease-in-out infinite 0.7s}.d3r{animation:dp 3s ease-in-out infinite 0.9s}
      @keyframes dp{0%,100%{opacity:0.3}50%{opacity:1}}
    `}</style>
    <g className="bbl">
      <rect x="6" y="12" width="52" height="38" rx="10" stroke="#00e5ff" strokeWidth="3.5" fill="#00e5ff" fillOpacity="0.07"/>
      <path d="M16 50 L10 62 L26 50" fill="#07111f" stroke="#00e5ff" strokeWidth="3" strokeLinejoin="round"/>
      <circle className="d1" cx="22" cy="31" r="3.5" fill="#00e5ff"/>
      <circle className="d2" cx="32" cy="31" r="3.5" fill="#00e5ff"/>
      <circle className="d3" cx="42" cy="31" r="3.5" fill="#00e5ff"/>
    </g>
    <g className="bbr">
      <rect x="42" y="44" width="52" height="38" rx="10" stroke="#00e5ff" strokeWidth="3.5" fill="#00e5ff" fillOpacity="0.07"/>
      <path d="M74 82 L82 94 L86 82" fill="#07111f" stroke="#00e5ff" strokeWidth="3" strokeLinejoin="round"/>
      <circle className="d1r" cx="58" cy="63" r="3.5" fill="#00e5ff"/>
      <circle className="d2r" cx="68" cy="63" r="3.5" fill="#00e5ff"/>
      <circle className="d3r" cx="78" cy="63" r="3.5" fill="#00e5ff"/>
    </g>
  </svg>
);

export default NegociationIcon;