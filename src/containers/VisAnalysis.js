import React from 'react';
import HeaderTitle from './Layout/HeaderTitle';
import './VisAnalysis.less';

const yArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const xArray = [];
((xArray) => {
  for (let i = 1; i <= 30; i++) {
    xArray.push(i * 2);
  }
})(xArray);
const circle = [
  {
    x: 350,
    y: 500,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 250,
    y: 300,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1650,
    y: 700,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1360,
    y: 400,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 200,
    y: 800,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 940,
    y: 650,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 850,
    y: 300,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1460,
    y: 500,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1600,
    y: 465,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1100,
    y: 870,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 980,
    y: 430,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 568,
    y: 698,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1000,
    y: 428,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 888,
    y: 666,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1548,
    y: 500,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1368,
    y: 777,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 543,
    y: 888,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 777,
    y: 398,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 356,
    y: 877,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1689,
    y: 654,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 300,
    y: 800,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 400,
    y: 700,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 500,
    y: 800,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 600,
    y: 600,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 460,
    y: 740,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 700,
    y: 800,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1300,
    y: 800,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1200,
    y: 700,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1400,
    y: 700,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1300,
    y: 600,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1000,
    y: 500,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1340,
    y: 790,
    color: '#108EE9',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 940,
    y: 790,
    color: '#F8E81C',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 990,
    y: 700,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  },
  {
    x: 1040,
    y: 630,
    color: '#09CDC6',
    r: Math.ceil(Math.random() * 10)
  }
];
const ballArray = [
  {
    chinese: '程序员',
    english: 'Programer',
    x: 5,
    y: 9.7,
    width: 50
  },
  {
    chinese: '学生',
    english: 'Student',
    x: 8,
    y: 5.7,
    width: 40
  },
  {
    chinese: '金融业',
    english: 'finance',
    x: 13,
    y: 4.5,
    width: 37
  },
  {
    chinese: '医生',
    english: 'doctor',
    x: 18,
    y: 4.3,
    width: 46
  },
  {
    chinese: '设计师',
    english: 'designer',
    x: 23,
    y: 3.6,
    width: 44
  },
  {
    chinese: '教师',
    english: 'teacher',
    x: 28,
    y: 4,
    width: 50
  },
  {
    chinese: '司机',
    english: 'driver',
    x: 33,
    y: 5.9,
    width: 35
  },
  {
    chinese: '导游',
    english: 'guide',
    x: 38,
    y: 2.2,
    width: 55
  },
  {
    chinese: '保险销售',
    english: 'insurance sales',
    x: 43,
    y: 3.6,
    width: 55
  },
  {
    chinese: '公共管理',
    english: 'public administration',
    x: 50,
    y: 3.6,
    width: 56
  },
  {
    chinese: '百货',
    english: 'department store',
    x: 53,
    y: 4.4,
    width: 50
  },
  {
    chinese: '科研',
    english: 'scientific research',
    x: 58,
    y: 4.9,
    width: 50
  }
];
const minY = 260;
const maxY = 890;
const minX = 210;
const maxX = 1730;
const ySpan = (maxY - minY) / yArray.length;
const xSpan = (maxX - minX) / xArray.length;
const xPer = xSpan / 2;
const yPer = ySpan / 1;
export default function VisAnalysis() {
  return (
    <div>
      <HeaderTitle title="智慧生活： 客群黏性分析" />
      <svg
        className="svg-container"
        viewBox="0 0 1724 771"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{
                stopColor: '#00C2F5',
                stopOpacity: 1
              }}
            />
            <stop
              offset="100%"
              style={{
                stopColor: '#06437A',
                stopOpacity: 1
              }}
            />
          </linearGradient>
        </defs>
        <g stroke="none" strokeWidth="1" fill="none">
          <g transform="translate(-100.000000, -193.000000)" stroke="#108EE9" strokeWidth="3">
            <g transform="translate(123,218)">
              {(() => {
                const result = [];
                const xL = '0';
                for (let i = 0; i < 23; i++) {
                  result.push(
                    <line
                      key={i}
                      x1={xL}
                      y1={10 + i * 32}
                      y2={xL}
                      x2={10 + i * 32}
                      stroke="#111732"
                      opacity="0.7"
                    />
                  );
                }
                return result;
              })()}
              {(() => {
                const result = [];
                const xL = 1674;
                for (let i = 0; i < 23; i++) {
                  result.push(
                    <line
                      key={i}
                      x1={xL}
                      y1={715 - i - i * 32}
                      y2={715}
                      x2={1674 - 10 - i * 32}
                      stroke="#111732"
                      opacity="0.7"
                    />
                  );
                }
                return result;
              })()}
              {(() => {
                const result = [];
                for (let i = 0; i < 23; i++) {
                  result.push(
                    <line
                      key={i}
                      x1={0}
                      y1={10 + i * 32}
                      y2={10 + i * 32}
                      x2={1674}
                      stroke="#111732"
                      opacity="0.7"
                    />
                  );
                }
                return result;
              })()}
              {(() => {
                const result = [];
                const yL = 715;
                for (let i = 1; i < 30; i++) {
                  result.push(
                    <line
                      key={i}
                      x1={i * 32}
                      y1={yL}
                      x2={yL + i * 32}
                      y2={0}
                      stroke="#111732"
                      opacity="0.7"
                    />
                  );
                }
                return result;
              })()}
            </g>
            {circle.map((it, index) => {
              return (
                <circle
                  key={index}
                  stroke="none"
                  cx={it.x.toString()}
                  cy={it.y.toString()}
                  r={it.r.toString()}
                  fill={it.color.toString()}
                  opacity="0.3"
                />
              );
            })}
            <path
              opacity="0.301856884"
              d="M114,210 L419,210 L419.311107,210 L419.567305,209.823508 L441.811107,194.5 L905.199911,194.5 L928.449405,209.834773 L928.699911,210 L929,210 L1365,210 L1365.34214,210 L1365.61257,209.790415 L1385.34214,194.5 L1621.21515,194.5 L1645.97306,209.849903 L1646.21515,210 L1646.5,210 L1805,210 L1805,352.5 L1805,352.940675 L1805.32523,353.238029 L1822.5,368.940675 L1822.5,539.585786 L1805.29289,556.792893 L1805,557.085786 L1805,557.5 L1805,712.5 L1805,712.843108 L1805.21065,713.113941 L1822.5,735.343108 L1822.5,856.689867 L1805.17549,881.934158 L1805,882.189867 L1805,882.5 L1805,950 L1496,950 L1495.7721,950 L1495.56671,950.098748 L1469.7721,962.5 L1354.22025,962.5 L1327.42012,950.092533 L1327.22025,950 L1327,950 L760,950 L759.724904,950 L759.488516,950.140707 L738.724904,962.5 L331.286796,962.5 L311.529999,950.152002 L311.286796,950 L311,950 L114,950 L114,864.5 L114,864.259804 L113.890906,864.045813 L101,838.759804 L101,678.268121 L113.865865,656.000278 L114,655.768121 L114,655.5 L114,480 L114,479.775544 L113.904072,479.57262 L101,452.275544 L101,337.732073 L113.897789,311.440425 L114,311.232073 L114,311 L114,210 Z"
            />
            <path
              opacity="0.301856884"
              strokeDasharray="5,5"
              className="dash-move"
              d="M123,218 L1797,218 L1797,940 L123,940 L123,218"
            />
            <path
              className="angle-flash"
              strokeWidth="10"
              stroke="#48AAFD"
              opacity="1"
              d="M114,260 L114,210 L164,210"
            />
            <path
              className="angle-flash"
              strokeWidth="10"
              stroke="#48AAFD"
              opacity="1"
              d="M1805,260 L1805,210 L1760,210"
            />
            <path
              className="angle-flash"
              strokeWidth="10"
              stroke="#48AAFD"
              opacity="1"
              d="M1805,900 L1805,950 L1755,950"
            />
            <path
              className="angle-flash"
              strokeWidth="10"
              stroke="#48AAFD"
              opacity="1"
              d="M164,950 L114,950 L114,900"
            />
            <polyline points="1730,890 210,890 210,260 " stroke="#00BFF2" strokeWidth="3" />{' '}
            {yArray.map((it, index, array) => {
              return (
                <text
                  className="left-degree"
                  key={index}
                  x={(minX - 30).toString()}
                  y={(maxY - ySpan * index).toString()}
                >
                  {it}
                </text>
              );
            })}
            <text className="left-degree" x={(minX - 40).toString()} y={(minY - 10).toString()}>
              次数
            </text>
            {xArray.map((it, index, array) => {
              return (
                <text
                  className="left-degree"
                  key={index}
                  x={(minX + index * xSpan).toString()}
                  y={(maxY + 30).toString()}
                >
                  {it}
                </text>
              );
            })}
            <text
              className="left-degree"
              x={(maxX - 18 + 50).toString()}
              y={(maxY + 30).toString()}
            >
              时常（分钟）
            </text>
            {ballArray.map((it, index) => {
              const animationDelay = Math.random() * 2;
              return (
                <g
                  key={index}
                  className="circle-dump"
                  // style={{ animationDelay: `${animationDelay}s` }}
                >
                  <circle
                    className="circle-shadow"
                    cx={(it.x * xPer + minX - 70).toString()}
                    cy={(maxY - it.y * yPer).toString()}
                    r={it.width.toString()}
                    stroke="none"
                    fill="#063870"
                    opacity="0.5"
                    style={{ animationDelay: `${animationDelay}s` }}
                  />
                  <circle
                    className="circle-scale"
                    cx={(it.x * xPer + minX - 70).toString()}
                    cy={(maxY - it.y * yPer).toString()}
                    r={it.width.toString()}
                    stroke="none"
                    fill="url(#grad1)"
                  />
                  <text
                    x={(it.x * xPer + minX - 70).toString()}
                    y={(maxY - it.y * yPer).toString()}
                    style={{ fontSize: 20 }}
                    className="left-degree"
                  >
                    {it.chinese}
                  </text>
                  <text
                    x={(it.x * xPer + minX - 70).toString()}
                    y={(maxY - it.y * yPer + 20).toString()}
                    className="english-degree"
                    lengthAdjust="spacingAndGlyphs"
                  >
                    {it.english}
                  </text>
                </g>
              );
            })}
          </g>
        </g>
      </svg>
    </div>
  );
}
