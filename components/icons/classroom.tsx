export const ClassroomIcon = ({ size = 90 }: { size?: number }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 120 100" fill="none">
    <style>{`
      .bglow-cr{animation:bgcr 2s ease-in-out infinite}
      @keyframes bgcr{0%,100%{opacity:0.04}50%{opacity:0.12}}
      .w1-cr{stroke-dasharray:55;stroke-dashoffset:55;animation:wcr 3s ease-in-out infinite}
      .w2-cr{stroke-dasharray:40;stroke-dashoffset:40;animation:wcr 3s ease-in-out infinite 0.5s}
      .w3-cr{stroke-dasharray:28;stroke-dashoffset:28;animation:wcr 3s ease-in-out infinite 1s}
      @keyframes wcr{0%,5%{stroke-dashoffset:55}55%{stroke-dashoffset:0}90%,100%{stroke-dashoffset:55}}
      .d1-cr{animation:dcr 2.5s ease-in-out infinite;transform-origin:25px 82px}
      .d2-cr{animation:dcr 2.5s ease-in-out infinite 0.4s;transform-origin:60px 82px}
      .d3-cr{animation:dcr 2.5s ease-in-out infinite 0.8s;transform-origin:95px 82px}
      @keyframes dcr{0%,100%{transform:translateY(0)}50%{transform:translateY(-1.5px)}}
    `}</style>
    {/* board */}
    <rect x="10" y="5" width="100" height="50" rx="5" stroke="#00e5ff" strokeWidth="3" fill="#07111f"/>
    <rect className="bglow-cr" x="12" y="7" width="96" height="46" rx="4" fill="#00e5ff"/>
    <rect x="15" y="10" width="90" height="38" rx="3" stroke="#00e5ff" strokeWidth="1" fill="none" opacity="0.15"/>
    {/* writing */}
    <line className="w1-cr" x1="22" y1="22" x2="78" y2="22" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <line className="w2-cr" x1="22" y1="32" x2="65" y2="32" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <line className="w3-cr" x1="22" y1="42" x2="50" y2="42" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    {/* eraser */}
    <rect x="88" y="28" width="14" height="8" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#00e5ff" fillOpacity="0.1"/>
    {/* tray */}
    <rect x="10" y="52" width="100" height="5" rx="2" fill="#00e5ff" fillOpacity="0.15" stroke="#00e5ff" strokeWidth="2"/>
    {/* legs */}
    <line x1="30" y1="57" x2="24" y2="72" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    <line x1="90" y1="57" x2="96" y2="72" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    <line x1="24" y1="68" x2="96" y2="68" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.2" strokeDasharray="4 3"/>
    {/* desk 1 */}
    <g className="d1-cr">
      <rect x="10" y="76" width="30" height="5" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#07111f"/>
      <line x1="15" y1="81" x2="12" y2="92" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="35" y1="81" x2="38" y2="92" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <rect x="14" y="70" width="22" height="8" rx="2" stroke="#00e5ff" strokeWidth="1.8" fill="none" opacity="0.4"/>
    </g>
    {/* desk 2 */}
    <g className="d2-cr">
      <rect x="45" y="76" width="30" height="5" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#07111f"/>
      <line x1="50" y1="81" x2="47" y2="92" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="70" y1="81" x2="73" y2="92" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <rect x="49" y="70" width="22" height="8" rx="2" stroke="#00e5ff" strokeWidth="1.8" fill="none" opacity="0.4"/>
    </g>
    {/* desk 3 */}
    <g className="d3-cr">
      <rect x="80" y="76" width="30" height="5" rx="2" stroke="#00e5ff" strokeWidth="2" fill="#07111f"/>
      <line x1="85" y1="81" x2="82" y2="92" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <line x1="105" y1="81" x2="108" y2="92" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      <rect x="84" y="70" width="22" height="8" rx="2" stroke="#00e5ff" strokeWidth="1.8" fill="none" opacity="0.4"/>
    </g>
  </svg>
);

export default ClassroomIcon;