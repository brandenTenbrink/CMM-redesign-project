import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { CardStyle } from './styles';

class Card extends Component {
    render() {
        const { children, className } = this.props;
        return (
            <CardStyle className={className}>
                {children}
            </CardStyle>
        );
    }
}

Card.propTypes = {
    children: PropTypes.array,
    className: PropTypes.object,
};

export default Card;