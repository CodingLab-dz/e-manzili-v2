const TrophyIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .trophy {
        animation: trophyFloat 3s ease-in-out infinite;
        transform-origin: center;
      }

      .star {
        animation: starPulse 2s ease-in-out infinite;
        transform-origin: 50px 38px;
      }

      .sparkle1 {
        animation: sparkle 1.5s ease-in-out infinite;
      }

      .sparkle2 {
        animation: sparkle 1.5s ease-in-out infinite .7s;
      }

      .shadow {
        animation: shadowPulse 3s ease-in-out infinite;
      }

      @keyframes trophyFloat {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }

      @keyframes starPulse {
        0%,100% {
          transform: scale(1);
          opacity:1;
        }
        50% {
          transform: scale(1.15);
          opacity:.7;
        }
      }

      @keyframes sparkle {
        0%,100% {
          opacity:.2;
          transform: scale(.8);
        }
        50% {
          opacity:1;
          transform: scale(1.3);
        }
      }

      @keyframes shadowPulse {
        0%,100% {
          opacity:.2;
          transform: scaleX(1);
        }
        50% {
          opacity:.1;
          transform: scaleX(.8);
        }
      }
    `}</style>

    <ellipse
      className="shadow"
      cx="50"
      cy="90"
      rx="18"
      ry="4"
      fill="#00E5FF"
    />

    <g className="trophy">
      <path
        d="M35 18H65V45C65 58 58 65 50 65C42 65 35 58 35 45V18Z"
        stroke="#00E5FF"
        strokeWidth="4"
      />

      <path
        d="M35 25H25C22 25 20 27 20 30V34C20 40 25 45 32 45"
        stroke="#00E5FF"
        strokeWidth="4"
      />

      <path
        d="M65 25H75C78 25 80 27 80 30V34C80 40 75 45 68 45"
        stroke="#00E5FF"
        strokeWidth="4"
      />

      <path d="M50 65V80" stroke="#00E5FF" strokeWidth="4" />

      <rect
        x="35"
        y="80"
        width="30"
        height="8"
        rx="3"
        stroke="#00E5FF"
        strokeWidth="4"
      />

      <polygon
        className="star"
        points="50,28 54,38 65,38 56,44 60,54 50,48 40,54 44,44 35,38 46,38"
        fill="#00E5FF"
      />
    </g>

    <circle className="sparkle1" cx="22" cy="25" r="2" fill="#00E5FF" />
    <circle className="sparkle2" cx="78" cy="25" r="2" fill="#00E5FF" />
  </svg>
);

export default TrophyIcon;