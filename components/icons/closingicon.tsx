const ClosingIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .r1-c{animation:r1c 2s ease-in-out infinite;transform-origin:50px 50px}
      .r2-c{animation:r2c 2s ease-in-out infinite 0.15s;transform-origin:50px 50px}
      .r3-c{animation:r3c 2s ease-in-out infinite 0.3s;transform-origin:50px 50px}
      @keyframes r1c{0%,100%{transform:scale(1);opacity:0.2}50%{transform:scale(1.05);opacity:0.5}}
      @keyframes r2c{0%,100%{transform:scale(1);opacity:0.4}50%{transform:scale(1.05);opacity:0.7}}
      @keyframes r3c{0%,100%{transform:scale(1);opacity:0.8}50%{transform:scale(1.05);opacity:1}}
      .arrow-c{animation:arrowc 2.5s ease-in-out infinite;transform-origin:82px 18px}
      @keyframes arrowc{0%{transform:translate(-40px,40px);opacity:0}25%{opacity:1}65%{transform:translate(0,0);opacity:1}80%{transform:translate(0,0);opacity:1}100%{transform:translate(-40px,40px);opacity:0}}
      .impact-c{animation:impactc 2.5s ease-in-out infinite;transform-origin:50px 50px}
      @keyframes impactc{0%,62%{transform:scale(0);opacity:0}72%{transform:scale(1.5);opacity:0.6}86%{transform:scale(2);opacity:0}100%{transform:scale(0);opacity:0}}
      .check-c{stroke-dasharray:45;stroke-dashoffset:45;animation:checkc 2.5s ease-in-out infinite}
      @keyframes checkc{0%,64%{stroke-dashoffset:45;opacity:0}78%{stroke-dashoffset:0;opacity:1}92%{stroke-dashoffset:0;opacity:1}100%{stroke-dashoffset:45;opacity:0}}
    `}</style>
    <circle className="r1-c" cx="50" cy="50" r="44" stroke="#00e5ff" strokeWidth="2.5"/>
    <circle className="r2-c" cx="50" cy="50" r="32" stroke="#00e5ff" strokeWidth="3"/>
    <circle className="r3-c" cx="50" cy="50" r="20" stroke="#00e5ff" strokeWidth="3.5"/>
    <circle cx="50" cy="50" r="8" fill="#00e5ff" opacity="0.9"/>
    <circle cx="50" cy="50" r="3" fill="#07111f"/>
    <g className="arrow-c">
      <line x1="14" y1="86" x2="54" y2="46" stroke="#00e5ff" strokeWidth="3.5" strokeLinecap="round"/>
      <polygon points="62,38 46,42 58,54" fill="#00e5ff"/>
      <line x1="14" y1="86" x2="6" y2="78" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="14" y1="86" x2="22" y2="94" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round"/>
      <line x1="14" y1="86" x2="8" y2="86" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    </g>
    <circle className="impact-c" cx="50" cy="50" r="10" stroke="#00e5ff" strokeWidth="2"/>
    <polyline className="check-c" points="36,50 46,60 64,40" stroke="#00e5ff" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default ClosingIcon;