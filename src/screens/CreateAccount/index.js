import React, { Component } from 'react';
import { CreateAccountCard, CardHeader, CreateAccountContainer, BackgroundImage, StyledLink, LinkContainer, PaddedInput, PasswordValidationList, PasswordValidationItem } from './styles';
import { Button, Icon } from '../../componentLibrary';

import { 
    EMAIL_VALIDATION_REGEX,
    CONTAINS_LETTER,
    CONTAINS_NUMBER,
    CONTAINS_SPECIAL_CHARACTER
 } from '../../constants/Regex';

const MINIMUM_PASSWORD_LENGTH = 8;

class CreateAccount extends Component {

    constructor() {
        super();
        this.state = {
            name: { value: '', valid: undefined },
            email: { value: '', valid: undefined },
            username: { value: '', valid: undefined },
            password: { value: '', valid: undefined },
            faxNumber: { value: '', valid: undefined },
            passwordFocused: false,
        }
    }

    onNameInputChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({
            name: {value, valid}
        });
    }

    onEmailInputChange = e => {
        const value = e.target.value;
        const valid = EMAIL_VALIDATION_REGEX.test(value);
        this.setState({
            email: {value, valid}
        });
    }

    onUserNameInputChange = e => {
        const value = e.target.value;
        const valid = this.userNameValidation(value);
        this.setState({
            username: {value, valid}
        });   
    }

    onPasswordInputChange = e => {
        const value = e.target.value;
        const valid = this.validatePassword(value);
        this.setState({
            password: {value, valid}
        }); 
    }

    onFaxNumberInputChange = e => {
        const { faxNumber } = this.state;
        const value = e.target.value.replace(/[^0-9]/g, "");
        const validInput = CONTAINS_NUMBER.test(value) || value === '';

        if ((validInput && value.length <= 10)) {
            const valid = faxNumber.value.length >= 9;
            this.setState({
                faxNumber: {value, valid}
            }); 
        }
    }

    basicInputValidation = input => {
        return input.length >= 1; 
    }

    userNameValidation = input => {
        return input.length >= 4;
    }

    passwordContainsLetter = (password = this.state.password.value) => CONTAINS_LETTER.test(password);

    passwordContainsNumber = (password = this.state.password.value) => CONTAINS_NUMBER.test(password);

    passwordContainsSpecialCharacter = (password = this.state.password.value) => CONTAINS_SPECIAL_CHARACTER.test(password);

    passwordLengthValidation = (password = this.state.password.value) => password.length >= MINIMUM_PASSWORD_LENGTH;

    passwordOnFocus = () => this.setState({passwordFocused: !this.state.passwordFocused});

    passwordOnBlur = () => this.setState({passwordFocused: !this.state.passwordFocused});

    validatePassword = input => {
        return this.passwordContainsLetter(input) && 
            this.passwordContainsNumber(input) && 
            this.passwordLengthValidation(input) &&
            this.passwordContainsSpecialCharacter(input)
    }

    validateForm = () => {
        const { name, email, password, faxNumber, username } = this.state;
        return (name.valid && password.valid && faxNumber.valid && username.valid && email.valid);
    }

    render() {
        const {
            name,
            email,
            username,
            password,
            faxNumber,
            passwordFocused
        } = this.state;

        const triggerPasswordValidation = passwordFocused || (password.valid !== undefined && !password.valid);
         
        return (
            <CreateAccountContainer>
                <BackgroundImage />
                <CreateAccountCard>
                    <CardHeader>Create Your Account</CardHeader>
                    <PaddedInput
                        label='Full Name'
                        value={name.value}
                        valid={name.valid && name.valid}
                        onChange={this.onNameInputChange}
                        error='Your name is required'
                        type="text"
                    />
                    <PaddedInput
                        label='Your Email'
                        value={email.value}
                        valid={email.valid && email.valid}
                        onChange={this.onEmailInputChange}
                        error='Your email must be a valid email'
                        type="text"
                    />
                    <PaddedInput
                        label='Username'
                        value={username.value}
                        valid={username.valid && username.valid}
                        onChange={this.onUserNameInputChange}
                        error='A username is required'
                        type='text'
                    />
                    <PaddedInput noPadding={triggerPasswordValidation}
                        label='Password'
                        value={password.value}
                        valid={password.valid && password.valid}
                        onChange={this.onPasswordInputChange}
                        passwordFocus={this.passwordOnFocus}
                        error='A password is required'
                        passwordBlur={this.passwordOnBlur}
                        type='password'
                    />
                    {triggerPasswordValidation && (
                        <PasswordValidationList>
                            <div>
                                {this.passwordLengthValidation() && <Icon name='Checkmark' width='24px' height='24px' style={{float: 'left'}}/>}
                                <PasswordValidationItem valid={this.passwordLengthValidation()}>
                                    At least 8 characters
                                </PasswordValidationItem>
                            </div>
                            <div>
                                {this.passwordContainsLetter() && <Icon name='Checkmark' width='24px' height='24px' style={{float: 'left'}}/>}
                                <PasswordValidationItem valid={this.passwordContainsLetter()}>
                                    At least one letter
                                </PasswordValidationItem>
                            </div>
                            <div>
                                {this.passwordContainsNumber() && <Icon name='Checkmark' width='24px' height='24px' style={{float: 'left'}}/>}
                                <PasswordValidationItem valid={this.passwordContainsNumber()}>
                                    At least one number
                                </PasswordValidationItem>
                            </div>
                            <div>
                                {this.passwordContainsSpecialCharacter() && <Icon name='Checkmark' width='24px' height='24px' style={{float: 'left'}}/>}
                                <PasswordValidationItem valid={this.passwordContainsSpecialCharacter()}>
                                    At least one special character
                                </PasswordValidationItem>
                            </div>
                        </PasswordValidationList>
                    )}
                    <PaddedInput
                        label='Your Fax Number'
                        value={faxNumber.value}
                        valid={faxNumber.valid && faxNumber.valid}
                        onChange={this.onFaxNumberInputChange}
                        error='Your Fax Number is required'
                        type='tel'
                    />
                    <Button 
                        label='SIGN UP'
                        type='primary'
                        onClick={() => {}}
                        disabled={this.validateForm()}
                    />
                    <LinkContainer><StyledLink to='/login'>OR SIGN IN</StyledLink></LinkContainer>
                </CreateAccountCard>
            </CreateAccountContainer>
        );
    }
}

export default CreateAccount;