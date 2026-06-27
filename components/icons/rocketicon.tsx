const RocketIcon = ({ size = 48 }: { size?: number }) => (
 <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    <style>{`
      .float-r{animation:floatr 2s ease-in-out infinite}
      @keyframes floatr{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}
      .flame-r{animation:flamer 0.6s ease-in-out infinite alternate;transform-origin:32px 40px}
      @keyframes flamer{0%{transform:scaleY(1) scaleX(1)}100%{transform:scaleY(1.4) scaleX(0.8)}}
    `}</style>
    <g className="float-r">
      <path d="M32 6 C32 6 20 18 20 34 L26 40 L38 40 L44 34 C44 18 32 6 32 6Z" stroke="#00e5ff" strokeWidth="2.5" strokeLinejoin="round"/>
      <circle cx="32" cy="26" r="5" stroke="#00e5ff" strokeWidth="2"/>
      <circle cx="32" cy="26" r="2" fill="#00e5ff" opacity="0.3"/>
      <path d="M20 34 L12 42 L20 40" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      <path d="M44 34 L52 42 L44 40" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
    </g>
    <g className="flame-r">
      <path d="M26 40 C26 40 28 48 32 50 C36 48 38 40 38 40" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
      <path d="M29 44 C29 44 30 50 32 52 C34 50 35 44 35 44" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    </g>
  </svg>
);

export default RocketIcon;