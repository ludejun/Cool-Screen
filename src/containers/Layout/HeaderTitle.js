import React from 'react';

export default function (props) {
  return (
      <p className="main-header-title">
        <span className="title-pattern-1"></span>
        <span className="title-pattern-2"></span>
        <label className="title-name">{props.title}</label>
        <span className="title-pattern-2"></span>
        <span className="title-pattern-1"></span>
      </p>
  );
}