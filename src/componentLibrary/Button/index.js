import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

class Button extends Component {
    render() {
        const {
            label,
            variant,
            size,
            disabled,
            onClick,
            type
        } = this.props;
        console.log(disabled);
        return (
            <StyledButton
                variant={variant} 
                onClick={onClick} 
                disabled={disabled} 
                size={size}
                type={type}
            >
                {label}
            </StyledButton>
        );
    }
}

Button.propTypes = {
    label: PropTypes.string,
    variant: PropTypes.string,
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Button;