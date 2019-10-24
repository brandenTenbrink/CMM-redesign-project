import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    FloatingPlaceholder,
    StyledInput,
    InputWrapper,
    ErrorText
} from './styles';

import { PHONE_NUMBER_FORMAT } from '../../constants/Regex';

class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isFocused: false,
        }
    }

    handleFocus = () => {
        const { passwordFocus } = this.props;
        if (passwordFocus) passwordFocus();
        this.setState({ isFocused: true});
    }

    handleBlur = () => {
        const { passwordBlur } = this.props;
        if (passwordBlur) passwordBlur();
        if (this.props.value === '') this.setState({ isFocused: false});
    }

    formatPhoneNumber = (phoneNumberString) => {
        const match = phoneNumberString.match(PHONE_NUMBER_FORMAT);
        if (match) {
          return '(' + match[1] + ') ' + match[2] + '-' + match[3]
        }
        return '';
    }

    render() {
        const { label, valid, value, className, onChange, type, minlength, maxlength, error } = this.props;
        const { isFocused } = this.state;

        let cleanPhoneNumber = ''
        if (type === 'tel' && valid && value) cleanPhoneNumber = this.formatPhoneNumber(value); 

        return (
            <InputWrapper className={className}>
                <FloatingPlaceholder isFocused={isFocused} valid={valid}>
                    {label}
                </FloatingPlaceholder>
                <StyledInput 
                    valid={valid}
                    value={cleanPhoneNumber !== '' ? cleanPhoneNumber : value}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    onChange={onChange}
                    type={type}
                    blurOnSubmit
                    minlength={minlength}
                    maxlength={maxlength}
                />
                {!valid && valid !== undefined && <ErrorText>{error}</ErrorText>}
            </InputWrapper>
        );
    }
}

Input.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.object,
    valid: PropTypes.bool,
    onChange: PropTypes.func,
    minlength: PropTypes.string,
    maxlength: PropTypes.string,
    error: PropTypes.string,
    passwordBlur: PropTypes.func,
    passwordFocus: PropTypes.func,
}

export default Input;