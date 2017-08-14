import React from "react";

export default function WDPie(props) {
  setTimeout(() => {
    document
      .querySelector("body")
      .insertAdjacentHTML(
        "afterBegin",
        "<style>.g-origin-jin{transform-origin:center center;}</style>"
      );
  }, 0);
  const dic = { low: 80, middle: 58, high: 37 };
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
          <g
            className="g-origin-jin"
            style={{
              transform: "rotateY(-180deg) rotate(-90deg)"
            }}
          >
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
            <circle
              cx="86"
              cy="88"
              r="58"
              strokeWidth="10"
              stroke="#80EBFD"
              strokeDasharray="100,366"
            />
            <circle cx="86" cy="88" r="37" strokeWidth="10" stroke="#1B2441" />
            <circle
              cx="86"
              cy="88"
              r="37"
              strokeWidth="10"
              stroke="#2592EE"
              strokeDasharray="80,234"
            />
          </g>
          <g>
            <line
              x1="86"
              y1="7"
              x2="260"
              y2="7"
              stroke="#E96A69"
              strokeWidth="1"
              strokeDasharray="5,3"
            />
            <circle cx="260" cy="7" r="3" fill="#E96A69" />
            <text fontSize="15" fill="#E96A69">
              <tspan x={260 + 22} y={7 * 1.6}>
                {"60%"}
              </tspan>
            </text>
            <line
              x1="86"
              y1="30"
              x2="260"
              y2="30"
              stroke="#80EBFD"
              strokeWidth="1"
              strokeDasharray="5,3"
            />
            <circle cx="260" cy="30" r="3" fill="#80EBFD" />
            <line
              x1="86"
              y1="50"
              x2="260"
              y2="50"
              stroke="#2592EE"
              strokeWidth="1"
              strokeDasharray="5,3"
            />
            <circle cx="260" cy="50" r="3" fill="#2592EE" />
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
