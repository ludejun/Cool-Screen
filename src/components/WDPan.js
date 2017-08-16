import React from "react";
import "./WDPan.less";

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
  const color = { low: "#E96A69", middle: "#80EBFD", high: "#2592EE" };
  const length = { low: 503, middle: 366, high: 234 };
  const yArray = { low: 7, middle: 30, high: 50 };
  return (
    <div
      style={{ width: "100%", height: "100%", position: "absolute", top: 0 }}
    >
      {Object.keys(props.data).map((it, index) => {
        return (
          <style key={index + Math.random()}>
            .jin-svg-pan-{it} {`{animation:jin-pan-${it} 1s linear;}`}
            @keyframes{` jin-pan-${it}{from{stroke-dasharray:0,${length[
              it
            ]}} to{stroke-dasharray:${length[it] *
              props.data[it] /
              100},${length[it]}}}`}
          </style>
        );
      })}
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
            <circle cx="86" cy="88" r="58" strokeWidth="10" stroke="#1B2441" />
            <circle cx="86" cy="88" r="37" strokeWidth="10" stroke="#1B2441" />
            {props &&
              Object.keys(props.data).map((it, index) => {
                return (
                  <circle
                    key={index + Math.random()}
                    className={`jin-svg-pan-${it}`}
                    cx="86"
                    cy="88"
                    r={dic[it]}
                    strokeWidth="10"
                    stroke={color[it]}
                    strokeDasharray={`${length[it] *
                      props.data[it] /
                      100},${length[it]}`}
                  />
                );
              })};
          </g>
          <g>
            {props.data &&
              Object.keys(props.data).map((it, index) => {
                return (
                  <g key={index}>
                    <line
                      className="jin-svg-pan-line"
                      x1="86"
                      y1={yArray[it]}
                      x2={176 + 180 * props.data[it] / 100}
                      y2={yArray[it]}
                      stroke={color[it]}
                      strokeWidth="1"
                      strokeDasharray="5,3"
                    />
                    <circle
                      cx={176 + 180 * props.data[it] / 100}
                      cy={yArray[it]}
                      r="3"
                      fill={color[it]}
                    />
                    <text fontSize="15" fill={color[it]}>
                      <tspan
                        x={176 + 180 * props.data[it] / 100 + 22}
                        y={yArray[it] * 1.6}
                      >
                        {`${props.data[it]}%`}
                      </tspan>
                    </text>
                  </g>
                );
              })}
          </g>
          <g transform="translate(270,116)">
            <circle cx="0" cy="4" r="6" fill="#E96A69" />
            <text x="14" y="7" fontSize="14px" fill="#fff">
              低端消费
            </text>
            <circle cx="0" cy="23" r="6" fill="#80EBFD" />
            <text x="14" y="26" fontSize="14px" fill="#fff">
              中端消费
            </text>
            <circle cx="0" cy="44" r="6" fill="#2592EE" />
            <text x="14" y="47" fontSize="14px" fill="#fff">
              高端消费
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
