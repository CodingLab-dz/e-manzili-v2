const VideoIcon = ({ size = 80 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <style>{`
      .player {
        animation: floatVideo 3s ease-in-out infinite;
        transform-origin: center;
      }

      .play {
        animation: playPulse 2s ease-in-out infinite;
        transform-origin: 50px 50px;
      }

      .wave1 {
        animation: wave 2s ease-out infinite;
      }

      .wave2 {
        animation: wave 2s ease-out infinite 0.7s;
      }

      .dot {
        animation: blink 1.5s ease-in-out infinite;
      }

      @keyframes floatVideo {
        0%,100% { transform: translateY(0px); }
        50% { transform: translateY(-4px); }
      }

      @keyframes playPulse {
        0%,100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.15);
        }
      }

      @keyframes wave {
        0% {
          opacity: .8;
          transform: scale(0.8);
        }
        100% {
          opacity: 0;
          transform: scale(1.8);
        }
      }

      @keyframes blink {
        0%,100% { opacity: 1; }
        50% { opacity: .3; }
      }
    `}</style>

    {/* Waves */}
    <circle
      className="wave1"
      cx="50"
      cy="50"
      r="18"
      stroke="#00E5FF"
      strokeWidth="2"
      fill="none"
    />

    <circle
      className="wave2"
      cx="50"
      cy="50"
      r="18"
      stroke="#00E5FF"
      strokeWidth="2"
      fill="none"
    />

    <g className="player">
      {/* Video Frame */}
      <rect
        x="20"
        y="25"
        width="60"
        height="50"
        rx="8"
        stroke="#00E5FF"
        strokeWidth="4"
      />

      {/* Film Holes */}
      <circle cx="28" cy="35" r="2" fill="#00E5FF"/>
      <circle cx="28" cy="50" r="2" fill="#00E5FF"/>
      <circle cx="28" cy="65" r="2" fill="#00E5FF"/>

      <circle cx="72" cy="35" r="2" fill="#00E5FF"/>
      <circle cx="72" cy="50" r="2" fill="#00E5FF"/>
      <circle cx="72" cy="65" r="2" fill="#00E5FF"/>

      {/* Play Button */}
      <polygon
        className="play"
        points="45,40 45,60 60,50"
        fill="#00E5FF"
      />

      {/* Recording Dot */}
      <circle
        className="dot"
        cx="70"
        cy="30"
        r="3"
        fill="#00E5FF"
      />
    </g>
  </svg>
);


export default VideoIcon;