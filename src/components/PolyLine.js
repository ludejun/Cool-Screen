import React from 'react';

export default function PolyLine(props) {
    return (
        <svg width="130" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <polyline
                points={props.location}
                stroke="#108EE9"
                strokeDasharray="4,4"
                strokeWidth="2"
                fill="none"/>
        </svg>
    );
};