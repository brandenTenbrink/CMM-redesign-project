import React from 'react';
import { SECONDARY_COLOR } from '../../constants/styles';

const SVG = ({
    style = {},
    fill = SECONDARY_COLOR,
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
        <path fill={fill} d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/>
    </svg>
);

export default SVG;