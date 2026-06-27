const HouseIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <style>{`
      .pulse-h { animation: pulseh 2s ease-in-out infinite; }
      @keyframes pulseh { 0%,100%{opacity:1} 50%{opacity:0.4} }
      .scan-h { animation: scanh 2s linear infinite; }
      @keyframes scanh { 0%{opacity:0;transform:translateY(-8px)} 30%{opacity:1} 70%{opacity:1} 100%{opacity:0;transform:translateY(8px)} }
    `}</style>
    <clipPath id="house-clip"><polygon points="12,3 21,11 21,21 3,21 3,11"/></clipPath>
    <polyline className="pulse-h" points="3,11 12,3 21,11" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="4" y="11" width="16" height="10" rx="0.5" stroke="#00e5ff" strokeWidth="1.8" opacity="0.8"/>
    <rect x="9.5" y="15" width="5" height="6" rx="0.5" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5"/>
    <line className="scan-h" x1="3" y1="14" x2="21" y2="14" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" clipPath="url(#house-clip)" opacity="0.7"/>
  </svg>
);


export default HouseIcon;