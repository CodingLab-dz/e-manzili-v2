const CheckIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .check-c{stroke-dasharray:60;stroke-dashoffset:60;animation:drawc 0.8s ease-out forwards,redrawc 4s ease-in-out infinite 1s}
      @keyframes drawc{to{stroke-dashoffset:0}}
      @keyframes redrawc{0%,40%,100%{stroke-dashoffset:0;opacity:1}10%{stroke-dashoffset:60;opacity:0}20%{stroke-dashoffset:0;opacity:1}}
      .ring-c{stroke-dasharray:200;stroke-dashoffset:200;animation:ringc 0.6s ease-out forwards 0.1s,pulsec 4s ease-in-out infinite 1s}
      @keyframes ringc{to{stroke-dashoffset:0}}
      @keyframes pulsec{0%,100%{opacity:1}50%{opacity:0.3}}
      .glow-c{animation:glowc 4s ease-in-out infinite 1s;transform-origin:50px 50px}
      @keyframes glowc{0%,40%,100%{transform:scale(1);opacity:0.15}20%{transform:scale(1.2);opacity:0.4}}
    `}</style>
    <circle className="glow-c" cx="50" cy="50" r="44" stroke="#00e5ff" strokeWidth="2"/>
    <circle className="ring-c" cx="50" cy="50" r="38" stroke="#00e5ff" strokeWidth="5" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="34" fill="#00e5ff" opacity="0.07"/>
    <polyline className="check-c" points="28,52 42,66 72,36" stroke="#00e5ff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default CheckIcon;