const PeopleIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <style>{`
      .scan-p { animation: scanp 2s linear infinite; }
      @keyframes scanp { 0%{opacity:0;transform:translateY(-8px)} 30%{opacity:1} 70%{opacity:1} 100%{opacity:0;transform:translateY(8px)} }
    `}</style>
    <clipPath id="head1-clip"><circle cx="9" cy="7" r="3.5"/></clipPath>
    <circle cx="9" cy="7" r="3.5" stroke="#00e5ff" strokeWidth="1.8"/>
    <line className="scan-p" x1="5" y1="7" x2="13" y2="7" stroke="#00e5ff" strokeWidth="1.2" strokeLinecap="round" clipPath="url(#head1-clip)" opacity="0.8"/>
    <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#00e5ff" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="16" cy="7" r="2.5" stroke="#00e5ff" strokeWidth="1.5" opacity="0.45"/>
    <path d="M13.5 20c0-2.5 1.8-4.5 4-4.5" stroke="#00e5ff" strokeWidth="1.5" strokeLinecap="round" opacity="0.45"/>
  </svg>
);

export default PeopleIcon;