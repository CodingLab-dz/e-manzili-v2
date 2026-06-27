const SproutIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .stem-s{stroke-dasharray:60;stroke-dashoffset:60;animation:grows 1.5s ease-out forwards,growloop 4s ease-in-out infinite 2s}
      @keyframes grows{to{stroke-dashoffset:0}}
      @keyframes growloop{0%,100%{stroke-dashoffset:0}30%{stroke-dashoffset:60}60%{stroke-dashoffset:0}}
      .leaf-l{animation:leafl 1.5s ease-out forwards 0.5s,leaflloop 4s ease-in-out infinite 2s;transform-origin:48px 62px;transform:scale(0)}
      @keyframes leafl{to{transform:scale(1)}}
      @keyframes leaflloop{0%,100%{transform:scale(1)}30%{transform:scale(0)}60%{transform:scale(1)}}
      .leaf-r{animation:leafr 1.5s ease-out forwards 0.8s,leafrloop 4s ease-in-out infinite 2s;transform-origin:52px 55px;transform:scale(0)}
      @keyframes leafr{to{transform:scale(1)}}
      @keyframes leafrloop{0%,100%{transform:scale(1)}30%{transform:scale(0)}60%{transform:scale(1)}}
      .spark-s{animation:sparks 2s ease-in-out infinite 2s}
      @keyframes sparks{0%,100%{opacity:0;transform:scale(0)}50%{opacity:1;transform:scale(1)}}
    `}</style>
    <path d="M25 80 Q50 74 75 80" stroke="#00e5ff" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.4"/>
    <path d="M32 85 Q50 80 68 85" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.25"/>
    <path className="stem-s" d="M50 78 C50 78 50 65 50 55 C50 45 50 38 50 30" stroke="#00e5ff" strokeWidth="4" strokeLinecap="round"/>
    <path className="leaf-l" d="M50 62 C40 58 30 48 32 38 C38 44 46 54 50 62Z" fill="#00e5ff" opacity="0.8"/>
    <path className="leaf-r" d="M50 55 C60 48 72 40 72 28 C64 34 54 46 50 55Z" fill="#00e5ff" opacity="0.6"/>
    <circle cx="50" cy="28" r="6" stroke="#00e5ff" strokeWidth="3" fill="#00e5ff" opacity="0.3"/>
    <circle cx="50" cy="28" r="2.5" fill="#00e5ff"/>
    <circle className="spark-s" cx="76" cy="42" r="2.5" fill="#00e5ff"/>
    <circle className="spark-s" cx="28" cy="36" r="2" fill="#00e5ff" style={{animationDelay:"2.3s"}}/>
    <circle className="spark-s" cx="70" cy="28" r="1.5" fill="#00e5ff" style={{animationDelay:"2.6s"}}/>
  </svg>
);

export default SproutIcon;