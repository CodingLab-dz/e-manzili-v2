export const LaptopIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .sglow{animation:sglow 2s ease-in-out infinite}
      @keyframes sglow{0%,100%{opacity:0.05}50%{opacity:0.15}}
      .cursor-l{animation:blink 1s step-end infinite}
      @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
      .l1{stroke-dasharray:30;stroke-dashoffset:30;animation:cl 3s ease-in-out infinite}
      .l2{stroke-dasharray:22;stroke-dashoffset:22;animation:cl 3s ease-in-out infinite 0.4s}
      .l3{stroke-dasharray:26;stroke-dashoffset:26;animation:cl 3s ease-in-out infinite 0.8s}
      .l4{stroke-dasharray:18;stroke-dashoffset:18;animation:cl 3s ease-in-out infinite 1.2s}
      @keyframes cl{0%,10%{stroke-dashoffset:30}40%,90%{stroke-dashoffset:0}100%{stroke-dashoffset:30}}
      .w1{animation:wf 2s ease-in-out infinite}
      .w2{animation:wf 2s ease-in-out infinite 0.2s}
      .w3{animation:wf 2s ease-in-out infinite 0.4s}
      @keyframes wf{0%,100%{opacity:0.2}50%{opacity:1}}
      .base-l{animation:basel 2s ease-in-out infinite}
      @keyframes basel{0%,100%{opacity:0.6}50%{opacity:1}}
    `}</style>
    <rect x="12" y="15" width="76" height="52" rx="5" stroke="#00e5ff" strokeWidth="3" fill="#07111f"/>
    <rect className="sglow" x="14" y="17" width="72" height="48" rx="4" fill="#00e5ff"/>
    <rect x="18" y="21" width="64" height="40" rx="3" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.2"/>
    <line className="l1" x1="24" y1="31" x2="54" y2="31" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <line className="l2" x1="28" y1="39" x2="50" y2="39" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <line className="l3" x1="24" y1="47" x2="50" y2="47" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <line className="l4" x1="28" y1="55" x2="46" y2="55" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round"/>
    <rect className="cursor-l" x="54" y="28" width="3" height="8" rx="1" fill="#00e5ff"/>
    <path className="w1" d="M68 52 C70 50 72 50 74 52" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path className="w2" d="M65 49 C68 46 72 46 75 49" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <path className="w3" d="M62 46 C66 42 74 42 78 46" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
    <circle cx="71" cy="55" r="1.5" fill="#00e5ff"/>
    <line x1="12" y1="67" x2="88" y2="67" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
    <path className="base-l" d="M5 67 Q6 76 12 78 L88 78 Q94 76 95 67 Z" stroke="#00e5ff" strokeWidth="3" fill="#07111f" strokeLinejoin="round"/>
    <rect x="22" y="70" width="8" height="4" rx="1" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <rect x="33" y="70" width="8" height="4" rx="1" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <rect x="44" y="70" width="8" height="4" rx="1" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <rect x="55" y="70" width="8" height="4" rx="1" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <rect x="66" y="70" width="8" height="4" rx="1" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.4"/>
    <rect x="33" y="76" width="34" height="3" rx="1" stroke="#00e5ff" strokeWidth="1.2" fill="none" opacity="0.3"/>
  </svg>
);

export default LaptopIcon;