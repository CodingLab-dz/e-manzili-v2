const SearchIconScan = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <style>{`
      .scan { animation: scan 2s linear infinite; }
      @keyframes scan {
        0%   { opacity:0; transform: translateY(-6px); }
        30%  { opacity:1; }
        70%  { opacity:1; }
        100% { opacity:0; transform: translateY(6px); }
      }
    `}</style>
    <circle cx="11" cy="11" r="7" stroke="#00e5ff" strokeWidth="2"/>
    <line x1="16.5" y1="16.5" x2="21" y2="21" stroke="#00e5ff" strokeWidth="2" strokeLinecap="round"/>
    <clipPath id="circle-clip">
      <circle cx="11" cy="11" r="6.5"/>
    </clipPath>
    <line
      className="scan"
      x1="5" y1="11" x2="17" y2="11"
      stroke="#00e5ff"
      strokeWidth="1.5"
      strokeLinecap="round"
      clipPath="url(#circle-clip)"
      opacity="0.8"
    />
  </svg>
);

export default SearchIconScan;