import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { PrimaryButton, SecondaryButton } from './styles';

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
        switch(type) {
            case 'primary':
                return (
                    <PrimaryButton
                        variant={variant} 
                        onClick={onClick} 
                        disabled={disabled} 
                        size={size}
                        type={type}
                    >
                        {label}
                    </PrimaryButton>
                );
            case 'secondary':
                return (
                    <SecondaryButton
                        variant={variant} 
                        onClick={onClick} 
                        disabled={disabled} 
                        size={size}
                        type={type}
                    >
                        {label}
                    </SecondaryButton>
                )
        }
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