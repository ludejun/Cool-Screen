import React from 'react';

export default function (props) {
  return (
    <svg className={props.className} viewBox="0 0 227 98" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
      <desc>Created with Sketch.</desc>
      <defs>
        <polygon id="path-1" points="187.805788 0 357.194212 0 383 60 162 60"></polygon>
        <filter x="-8.8%" y="-31.7%" width="117.7%" height="163.3%" filterUnits="objectBoundingBox" id="filter-2">
          <feGaussianBlur stdDeviation="18" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
          <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"
                       result="shadowInnerInner1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.1795494   0 0 0 0 0.488193775   0 0 0 0 1  0 0 0 0.754387455 0" type="matrix"
                         in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <polygon id="path-3" points="180.940034 40 176 50.9963513 189.554443 50.9963513"></polygon>
        <filter x="-144.2%" y="-181.2%" width="392.1%" height="453.9%" filterUnits="objectBoundingBox" id="filter-4">
          <feGaussianBlur stdDeviation="18" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
          <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"
                       result="shadowInnerInner1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.1795494   0 0 0 0 0.488193775   0 0 0 0 1  0 0 0 0.754387455 0" type="matrix"
                         in="shadowInnerInner1"></feColorMatrix>
        </filter>
        <polygon id="path-5" points="359.940034 40 355 50.9963513 368.554443 50.9963513"></polygon>
        <filter x="-144.2%" y="-181.2%" width="392.1%" height="453.9%" filterUnits="objectBoundingBox" id="filter-6">
          <feGaussianBlur stdDeviation="18" in="SourceAlpha" result="shadowBlurInner1"></feGaussianBlur>
          <feOffset dx="0" dy="0" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset>
          <feComposite in="shadowOffsetInner1" in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1"
                       result="shadowInnerInner1"></feComposite>
          <feColorMatrix values="0 0 0 0 0.1795494   0 0 0 0 0.488193775   0 0 0 0 1  0 0 0 0.754387455 0" type="matrix"
                         in="shadowInnerInner1"></feColorMatrix>
        </filter>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="数字金融-舆情" transform="translate(-358.000000, -290.000000)">
          <g id="Group-4" transform="translate(199.000000, 291.000000)">
            <g id="万达财富">
              <g id="Group-2">
                <g id="Rectangle" opacity="0.51805933">
                  <use fill="black" fillOpacity="1" filter="url(#filter-2)" xlinkHref="#path-1"></use>
                  <use stroke="#1795EA" strokeWidth="2" xlinkHref="#path-1"></use>
                </g>
                <circle className="left-circle" id="Oval-49-Copy-4" fill="#015BCB" cx="382.5" cy="59.5"
                        r="3.5"></circle>
                <circle className="right-circle" id="Oval-49-Copy-5" fill="#015BCB" cx="162.5" cy="59.5"
                        r="3.5"></circle>
                <path d="M273,59 L273,96.2507776" id="Path-917" stroke="#0D4F8C" strokeWidth="2"></path>
                <g id="Path-918" opacity="0.51805933">
                  <use fill="black" fillOpacity="1" filter="url(#filter-4)" xlinkHref="#path-3"></use>
                  <use stroke="#1795EA" strokeWidth="2" xlinkHref="#path-3"></use>
                </g>
                <g id="Path-918-Copy" opacity="0.51805933"
                   transform="translate(361.777221, 45.498176) scale(-1, 1) translate(-361.777221, -45.498176) ">
                  <use fill="black" fillOpacity="1" filter="url(#filter-6)" xlinkHref="#path-5"></use>
                  <use stroke="#1795EA" strokeWidth="2" xlinkHref="#path-5"></use>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}