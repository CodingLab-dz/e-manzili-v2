const SettingsIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <style>{`
      .gear {
        animation: rotateGear 8s linear infinite;
        transform-origin: 50px 50px;
      }

      .center {
        animation: pulseCenter 2s ease-in-out infinite;
        transform-origin: 50px 50px;
      }

      @keyframes rotateGear {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }

      @keyframes pulseCenter {
        0%,100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.25);
        }
      }
    `}</style>

    <g className="gear">
      <circle
        cx="50"
        cy="50"
        r="22"
        stroke="#00E5FF"
        strokeWidth="4"
      />

      {[0,45,90,135,180,225,270,315].map((a, i) => (
        <rect
          key={i}
          x="47"
          y="10"
          width="6"
          height="12"
          rx="2"
          fill="#00E5FF"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
    </g>

    <circle
      className="center"
      cx="50"
      cy="50"
      r="8"
      fill="#00E5FF"
    />
  </svg>
);

export default SettingsIcon;