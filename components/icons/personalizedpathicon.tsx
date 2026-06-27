const PersonalizedPathIcon = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .road{
        stroke-dasharray:180;
        stroke-dashoffset:180;
        animation:drawRoad 3s ease-in-out infinite;
      }

      .roadDash{
        stroke-dasharray:8 8;
        animation:dashMove 1.5s linear infinite;
      }

      .p1{
        animation:pulse1 3s ease-in-out infinite;
      }

      .p2{
        animation:pulse2 3s ease-in-out infinite;
      }

      .p3{
        animation:pulse3 3s ease-in-out infinite;
      }

      .flag{
        transform-origin:80px 22px;
        animation:flagWave 2s ease-in-out infinite;
      }

      .ring{
        animation:ringPulse 2.5s ease infinite;
      }

      @keyframes drawRoad{
        0%{stroke-dashoffset:180;}
        35%{stroke-dashoffset:0;}
        100%{stroke-dashoffset:0;}
      }

      @keyframes dashMove{
        from{stroke-dashoffset:16;}
        to{stroke-dashoffset:0;}
      }

      @keyframes pulse1{
        0%,100%{r:4;opacity:.4}
        20%{r:6;opacity:1}
      }

      @keyframes pulse2{
        0%,100%{r:4;opacity:.4}
        50%{r:6;opacity:1}
      }

      @keyframes pulse3{
        0%,100%{r:4;opacity:.4}
        80%{r:6;opacity:1}
      }

      @keyframes flagWave{
        0%,100%{transform:rotate(0deg)}
        50%{transform:rotate(8deg)}
      }

      @keyframes ringPulse{
        0%,100%{
          opacity:.25;
          transform:scale(.95);
        }
        50%{
          opacity:.6;
          transform:scale(1.08);
        }
      }
    `}</style>

    {/* outer glow */}
    <circle
      className="ring"
      cx="50"
      cy="50"
      r="44"
      stroke="#00E5FF"
      strokeWidth="1.5"
    />

    {/* Road */}
    <path
      className="road"
      d="
      M18 80
      C18 60 35 62 36 50
      C37 38 55 40 56 54
      C57 68 73 60 80 26
      "
      stroke="#00E5FF"
      strokeWidth="12"
      strokeLinecap="round"
      fill="none"
      opacity=".18"
    />

    {/* Middle lane */}
    <path
      className="roadDash"
      d="
      M18 80
      C18 60 35 62 36 50
      C37 38 55 40 56 54
      C57 68 73 60 80 26
      "
      stroke="#00E5FF"
      strokeWidth="2.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* Start */}
    <circle
      cx="18"
      cy="80"
      r="7"
      stroke="#00E5FF"
      strokeWidth="3"
    />

    {/* Milestones */}
    <circle className="p1" cx="36" cy="50" r="4" fill="#00E5FF"/>
    <circle className="p2" cx="56" cy="54" r="4" fill="#00E5FF"/>
    <circle className="p3" cx="70" cy="44" r="4" fill="#00E5FF"/>

    {/* Connections */}
    <line
      x1="36"
      y1="50"
      x2="36"
      y2="32"
      stroke="#00E5FF"
      strokeDasharray="3 3"
      opacity=".5"
    />

    <line
      x1="56"
      y1="54"
      x2="56"
      y2="72"
      stroke="#00E5FF"
      strokeDasharray="3 3"
      opacity=".5"
    />

    <line
      x1="70"
      y1="44"
      x2="82"
      y2="44"
      stroke="#00E5FF"
      strokeDasharray="3 3"
      opacity=".5"
    />

    {/* User icon */}
    <circle cx="36" cy="26" r="3" stroke="#00E5FF" strokeWidth="2"/>
    <path
      d="M31 34C31 30 33.5 28 36 28C38.5 28 41 30 41 34"
      stroke="#00E5FF"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Book */}
    <path
      d="M51 70
         h10
         a2 2 0 0 1 2 2
         v6
         h-10
         a2 2 0 0 0-2 2
         z"
      stroke="#00E5FF"
      strokeWidth="2"
      fill="none"
    />

    {/* Star */}
    <polygon
      points="82,38 83.5,42 88,42 84.5,45 86,49 82,46.5 78,49 79.5,45 76,42 80.5,42"
      fill="#00E5FF"
    />

    {/* Finish flag */}
    <line
      x1="80"
      y1="18"
      x2="80"
      y2="36"
      stroke="#00E5FF"
      strokeWidth="3"
      strokeLinecap="round"
    />

    <g className="flag">
      <path
        d="M80 18
           L91 21
           L86 27
           L91 33
           L80 30Z"
        fill="#00E5FF"
      />
    </g>
  </svg>
);

export default PersonalizedPathIcon;