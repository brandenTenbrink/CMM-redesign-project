import React from 'react';

const SVG = ({
    style = {},
    fill = '#d32f2f',
    width = '100%',
    height = '100%',
    className = 'Checkmark',
    viewBox = ''
}) => (
    <svg
        width={width}
        height={height}
        style={style}
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
        className={`svg-icon ${className || ''}`}
    >
        <path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill={fill}/>
    </svg>
);

export default SVG;