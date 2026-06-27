const TeamIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .center-head{
        animation:headBob 2.4s ease-in-out infinite;
        transform-origin:50px 28px;
      }

      .left-person{
        animation:leftFloat 2.4s ease-in-out infinite;
        transform-origin:28px 40px;
      }

      .right-person{
        animation:rightFloat 2.4s ease-in-out infinite;
        transform-origin:72px 40px;
      }

      .pulse-ring{
        animation:pulseRing 2.5s ease-in-out infinite;
        transform-origin:50px 50px;
      }

      .spark{
        animation:spark 1.8s ease-in-out infinite;
        transform-origin:center;
      }

      @keyframes headBob{
        0%,100%{transform:translateY(0)}
        50%{transform:translateY(-2px)}
      }

      @keyframes leftFloat{
        0%,100%{transform:translateY(0)}
        50%{transform:translate(-1px,-2px)}
      }

      @keyframes rightFloat{
        0%,100%{transform:translateY(0)}
        50%{transform:translate(1px,-2px)}
      }

      @keyframes pulseRing{
        0%,100%{
          opacity:.15;
          transform:scale(.95);
        }
        50%{
          opacity:.45;
          transform:scale(1.08);
        }
      }

      @keyframes spark{
        0%,100%{
          opacity:.2;
          transform:scale(.8);
        }
        50%{
          opacity:1;
          transform:scale(1.2);
        }
      }
    `}</style>

    {/* Glow Ring */}
    <circle
      className="pulse-ring"
      cx="50"
      cy="48"
      r="32"
      stroke="#00E5FF"
      strokeWidth="2"
      opacity=".25"
    />

    {/* Left */}
    <g className="left-person">
      <circle
        cx="28"
        cy="36"
        r="8"
        stroke="#00E5FF"
        strokeWidth="3"
      />
      <path
        d="M16 56
           C16 48 22 44 28 44
           C34 44 40 48 40 56"
        stroke="#00E5FF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* Center */}
    <g className="center-head">
      <circle
        cx="50"
        cy="28"
        r="10"
        stroke="#00E5FF"
        strokeWidth="3.2"
      />

      <path
        d="M34 60
           C34 47 42 41 50 41
           C58 41 66 47 66 60"
        stroke="#00E5FF"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* Right */}
    <g className="right-person">
      <circle
        cx="72"
        cy="36"
        r="8"
        stroke="#00E5FF"
        strokeWidth="3"
      />
      <path
        d="M60 56
           C60 48 66 44 72 44
           C78 44 84 48 84 56"
        stroke="#00E5FF"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </g>

    {/* Connection */}
    <path
      d="M36 34 L42 30"
      stroke="#00E5FF"
      strokeWidth="2"
      opacity=".5"
    />

    <path
      d="M58 30 L64 34"
      stroke="#00E5FF"
      strokeWidth="2"
      opacity=".5"
    />

    {/* Spark */}
    <g className="spark">
      <path
        d="M50 8
           L52 13
           L57 13
           L53 16
           L55 21
           L50 18
           L45 21
           L47 16
           L43 13
           L48 13 Z"
        fill="#00E5FF"
      />
    </g>
  </svg>
);

export default TeamIcon;