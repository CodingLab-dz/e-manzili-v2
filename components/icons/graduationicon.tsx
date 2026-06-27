const GraduationIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <style>{`
      .float-g { animation: floatg 2.5s ease-in-out infinite; }
      @keyframes floatg { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
      .scan-g { animation: scang 2s linear infinite; }
      @keyframes scang { 0%{opacity:0;transform:translateY(-8px)} 30%{opacity:1} 70%{opacity:1} 100%{opacity:0;transform:translateY(8px)} }
    `}</style>
    <clipPath id="hat-clip"><polygon points="12,4 22,9 12,14 2,9"/></clipPath>
    <polygon className="float-g" points="12,4 22,9 12,14 2,9" stroke="#00e5ff" strokeWidth="1.8" strokeLinejoin="round"/>
    <line x1="19" y1="9" x2="19" y2="15" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
    <circle cx="19" cy="16" r="1" fill="#00e5ff" opacity="0.6"/>
    <line className="scan-g" x1="4" y1="9" x2="20" y2="9" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" clipPath="url(#hat-clip)" opacity="0.7"/>
    <path d="M7 12v4c0 2.8 2.2 4 5 4s5-1.2 5-4v-4" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export default GraduationIcon;