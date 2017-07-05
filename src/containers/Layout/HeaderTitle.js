import React from 'react';

export default function HeaderTitle(props) {
  return (
    <p className="main-header-title">
      <span className="title-pattern-1" />
      <span className="title-pattern-2" />
      <label className="title-name">{props.title}</label>
      <span className="title-pattern-2" />
      <span className="title-pattern-1" />
    </p>
  );
}
