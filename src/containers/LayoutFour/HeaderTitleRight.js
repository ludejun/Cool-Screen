import React from 'react';

export default function HeaderTitleRight(props) {
  return (
    <p className="header-title">
      <span className="title-pattern-1" />
      <span className="title-pattern-2" />
      <label className="title-name">{props.title}</label>
      <span className="title-pattern-2" />
      <span className="title-pattern-1" />
    </p>
  );
}
