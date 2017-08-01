import React from 'react';

export default function (props) {
  return (
    <svg className={props.className} viewBox="0 0 561 526" version="1.1" xmlns="http://www.w3.org/2000/svg"
         xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <filter x="-3.8%" y="-4.1%" width="107.7%" height="108.3%" filterUnits="objectBoundingBox" id="filter-1">
          <feGaussianBlur stdDeviation="6.31417411" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <rect id="path-2" x="22" y="115" width="499" height="458"></rect>
        <mask id="mask-3" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox" x="0" y="0" width="499"
              height="458" fill="white">
          <use xlinkHref="#path-2"></use>
        </mask>
      </defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="数字金融-舆情" transform="translate(-199.000000, -364.000000)">
          <g id="Group-4" transform="translate(199.000000, 291.000000)">
            <rect id="Rectangle-59-Copy-2" fill="#003F8B" opacity="0.281589674" filter="url(#filter-1)" x="51" y="89"
                  width="494" height="458"></rect>
            <g id="万达财富">
              <g id="Group-2">
                <polygon id="Path-916" stroke="#1795EA" strokeWidth="2" opacity="0.350373641"
                         points="3.47767898 96 542.921044 96 542.921044 594.910741 3 594.910741"></polygon>
                {/*<circle id="Oval-49" fill="#015BCB" cx="3.5" cy="95.5" r="3.5"></circle>*/}
                {/*<circle id="Oval-49-Copy" fill="#015BCB" cx="3.5" cy="595.5" r="3.5"></circle>*/}
                {/*<circle id="Oval-49-Copy-2" fill="#015BCB" cx="541.5" cy="595.5" r="3.5"></circle>*/}
                {/*<circle id="Oval-49-Copy-3" fill="#015BCB" cx="541.5" cy="95.5" r="3.5"></circle>*/}
                <use className="rect-dasharray" id="Rectangle-59" stroke="#3E92C9" mask="url(#mask-3)" strokeWidth="4" fill="#003F8B"
                     opacity="0.79908288" strokeDasharray="8,5" xlinkHref="#path-2"></use>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}