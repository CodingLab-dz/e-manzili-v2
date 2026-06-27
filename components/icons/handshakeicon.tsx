const HandshakeIcon = ({ size = 48 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
        <style>{`
      .arrow-st {
        animation: shoot 2s ease-in-out infinite;
        transform-origin: 50px 50px;
      }

      @keyframes shoot {
        0% {
          transform: translate(-8px, 8px);
          opacity: 0;
        }
        20% {
          opacity: 1;
        }
        50% {
          transform: translate(0,0);
        }
        100% {
          transform: translate(0,0);
          opacity: 1;
        }
      }

      .target-st {
        animation: pulse 2s ease-in-out infinite;
        transform-origin: 50px 40px;
      }

      @keyframes pulse {
        0%,100% { transform: scale(1); }
        50% { transform: scale(1.08); }
      }

      .bar1 {
        animation: grow1 2s ease-in-out infinite;
        transform-origin: 25px 82px;
      }

      .bar2 {
        animation: grow2 2s ease-in-out infinite;
        transform-origin: 45px 82px;
      }

      .bar3 {
        animation: grow3 2s ease-in-out infinite;
        transform-origin: 65px 82px;
      }

      @keyframes grow1 {
        0%,100% { transform: scaleY(.7); }
        50% { transform: scaleY(1); }
      }

      @keyframes grow2 {
        0%,100% { transform: scaleY(.8); }
        50% { transform: scaleY(1.25); }
      }

      @keyframes grow3 {
        0%,100% { transform: scaleY(.9); }
        50% { transform: scaleY(1.4); }
      }

      .chat-st {
        animation: floatChat 3s ease-in-out infinite;
      }

      @keyframes floatChat {
        0%,100% { transform: translateY(0); }
        50% { transform: translateY(-3px); }
      }

      .spark {
        animation: sparkle 1.5s ease-in-out infinite;
      }

      @keyframes sparkle {
        0%,100% {
          opacity: 0.3;
          transform: scale(.8);
        }
        50% {
          opacity: 1;
          transform: scale(1.2);
        }
      }
    `}</style>

        {/* Chat Bubble */}
        <g className="chat-st">
            <path
                d="M18 25C18 19 23 15 30 15H42C49 15 54 19 54 25V32C54 38 49 42 42 42H35L28 48V42H30C23 42 18 38 18 32Z"
                stroke="#00E5FF"
                strokeWidth="3"
                fill="none"
            />
            <circle cx="28" cy="28" r="2" fill="#00E5FF" />
            <circle cx="36" cy="28" r="2" fill="#00E5FF" />
            <circle cx="44" cy="28" r="2" fill="#00E5FF" />
        </g>

        {/* Target */}
        <g className="target-st">
            <circle cx="70" cy="30" r="14" stroke="#00E5FF" strokeWidth="3" />
            <circle cx="70" cy="30" r="8" stroke="#00E5FF" strokeWidth="3" />
            <circle cx="70" cy="30" r="3" fill="#00E5FF" />
        </g>

        {/* Arrow */}
        <g className="arrow-st">
            <line
                x1="52"
                y1="48"
                x2="68"
                y2="32"
                stroke="#00E5FF"
                strokeWidth="3"
                strokeLinecap="round"
            />
            <polyline
                points="63,32 68,32 68,37"
                fill="none"
                stroke="#00E5FF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>

        {/* Growth Bars */}
        <rect className="bar1" x="20" y="58" width="10" height="24" rx="2" fill="#00E5FF" opacity=".7" />
        <rect className="bar2" x="40" y="48" width="10" height="34" rx="2" fill="#00E5FF" />
        <rect className="bar3" x="60" y="38" width="10" height="44" rx="2" fill="#00E5FF" opacity=".8" />

        {/* Trend Line */}
        <polyline
            points="25,65 45,55 65,45 82,25"
            fill="none"
            stroke="#00E5FF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        />

        {/* Sparkles */}
        <g className="spark">
            <circle cx="82" cy="18" r="2" fill="#00E5FF" />
            <circle cx="15" cy="55" r="2" fill="#00E5FF" />
        </g>
    </svg>
);


export default HandshakeIcon;