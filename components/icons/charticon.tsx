const ChartIcon = ({ size = 48 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <style>{`
      .bar1{animation:bar1 2s ease-in-out infinite;transform-origin:26px 72px}
      .bar2{animation:bar2 2s ease-in-out infinite;transform-origin:50px 72px}
      .bar3{animation:bar3 2s ease-in-out infinite;transform-origin:74px 72px}
      @keyframes bar1{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.6)}}
      @keyframes bar2{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}
      @keyframes bar3{0%,100%{transform:scaleY(1)}50%{transform:scaleY(0.8)}}
      .arrow-s{animation:arrows 1.5s ease-in-out infinite}
      @keyframes arrows{0%,100%{transform:translate(0,0)}50%{transform:translate(4px,-4px)}}
      .ring-s{animation:rings 2s ease-in-out infinite}
      @keyframes rings{0%,100%{opacity:0.25}50%{opacity:0.05}}
      .star-s{animation:stars 2s ease-in-out infinite;transform-origin:88px 80px}
      @keyframes stars{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.3;transform:scale(0.7)}}
    `}</style>

        {/* bars */}
        <rect className="bar1" x="18" y="45" width="16" height="27" rx="3" fill="#00e5ff" opacity="0.7" />
        <rect className="bar2" x="42" y="32" width="16" height="40" rx="3" fill="#00e5ff" opacity="0.9" />
        <rect className="bar3" x="66" y="38" width="16" height="34" rx="3" fill="#00e5ff" opacity="0.7" />

        {/* base line */}
        <line x1="10" y1="72" x2="90" y2="72" stroke="#00e5ff" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />

        {/* trend arrow */}
        <g className="arrow-s">
            <polyline points="18,62 38,42 58,52 82,22" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <polyline points="72,18 82,22 78,32" stroke="#00e5ff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>

        {/* target */}
        <circle className="ring-s" cx="82" cy="18" r="10" stroke="#00e5ff" strokeWidth="1.5" />
        <circle cx="82" cy="18" r="4" stroke="#00e5ff" strokeWidth="1.5" opacity="0.5" />
        <circle cx="82" cy="18" r="1.5" fill="#00e5ff" />

        {/* star */}
        <g className="star-s">
            <polygon points="88,74 89.5,78 94,78 90.5,81 92,85 88,82.5 84,85 85.5,81 82,78 86.5,78" fill="#00e5ff" opacity="0.8" />
        </g>
    </svg>
);

export default ChartIcon;