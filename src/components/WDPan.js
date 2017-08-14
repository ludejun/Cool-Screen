import React from "react";

export default function WDPie() {
  return (
    <div>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 356 176"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <g className="g-origin" style={{ transformOrigin: "center center", transform: 'rotateY(-180deg) rotate(-90deg)'}}>
            <circle cx="86" cy="88" r="80" strokeWidth="10" stroke="#1B2441" />
            <circle
              cx="86"
              cy="88"
              r="80"
              strokeWidth="10"
              stroke="#E96A69"
              strokeDasharray="300,503"
            />
            <circle cx="86" cy="88" r="58" strokeWidth="10" stroke="#1B2441" />
            <circle cx="86" cy="88" r="37" strokeWidth="10" stroke="#1B2441" />
          </g>
          <g transform="translate(286,116)">
            <circle cx="4" cy="4" r="6" fill="#E96A69" />
            <text x="20" y="7" fontSize="10px" fill="#fff">
              低端消费
            </text>
            <circle cx="4" cy="23" r="6" fill="#80EBFD" />
            <text x="20" y="26" fontSize="10px" fill="#fff">
              中端消费
            </text>
            <circle cx="4" cy="44" r="6" fill="#2592EE" />
            <text x="20" y="47" fontSize="10px" fill="#fff">
              高端消费
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
