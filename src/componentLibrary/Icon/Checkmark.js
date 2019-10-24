import React from 'react';

const SVG = ({
    style = {},
    fill = '#008300',
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
        <path d="M0 0h24v24H0z" fill='none'/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill={fill}/>
    </svg>
);

export default SVG;