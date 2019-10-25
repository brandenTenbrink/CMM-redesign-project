import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    ListingSubHeader,
    SubHeaderText,
    SubHeaderTitle,
    StepTracker,
    StepHeader,
    Steper,
    SubHeader,
    StepBody,
    PaddedInput,
    InputWrapper,
    ButtonRow,
    ButtonWrapper
} from './styles';

import { Row, Column, Button} from '../../componentLibrary';

class ContactInfoStep extends Component {

    render() {
        const {
            firstName,
            firstNameChange,
            lastName,
            lastNameChange,
            email,
            phoneNumber,
            phoneNumberChange,
            emailChange,
            addressLine1,
            addressLine1Change,
            zipcode,
            city,
            country,
            state,
            stateChange,
            cityChange,
            countryChange,
            zipcodeChange,
            incrementStep,
            currentStep,
            decrementStep
        } = this.props;

        return (
            <>
                <ListingSubHeader>
                    <Row>
                        <Column xs={6} sm={6} md={8} lg={8}>
                            <Steper>
                                <StepTracker>Step {currentStep} of 3</StepTracker>  
                                <StepHeader>Contact Information</StepHeader>
                            </Steper>
                        </Column>
                        <Column xs={6} sm={6} md={4} lg={4}>
                            <SubHeader>
                                <SubHeaderTitle right={true}>
                                    Creative Technologist
                                </SubHeaderTitle>
                                <SubHeaderText right={true}>
                                    Id: 345264 | Marketing | Columbus, OH | Full Time
                                </SubHeaderText>
                            </SubHeader>
                        </Column>
                    </Row>
                </ListingSubHeader>

                <StepBody>
                    <Row>
                        <Column xs={12} sm={12} md={6}>
                            <InputWrapper>
                                <PaddedInput
                                    label='First Name'
                                    value={firstName.value}
                                    valid={firstName.valid && firstName.valid}
                                    onChange={firstNameChange}
                                    error='A first name is required'
                                    type='text'
                                />
                            </InputWrapper>
                        </Column>
                        <Column xs={12} sm={12} md={6}>
                            <PaddedInput
                                label='Last Name'
                                value={lastName.value}
                                valid={lastName.valid && lastName.valid}
                                onChange={lastNameChange}
                                error='A last name is required'
                                type='text'
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column xs={12} sm={12} md={6}>
                            <InputWrapper>
                                <PaddedInput
                                    label='Email'
                                    value={email.value}
                                    valid={email.valid && email.valid}
                                    onChange={emailChange}
                                    error='An email is required'
                                    type='text'
                                />
                            </InputWrapper>
                        </Column>
                        <Column xs={12} sm={12} md={6}>
                            <PaddedInput
                                label='Phone Number'
                                value={phoneNumber.value}
                                valid={phoneNumber.valid && phoneNumber.valid}
                                onChange={phoneNumberChange}
                                error='A phone number is required'
                                type='text'
                            />
                        </Column>
                    </Row>
                    <PaddedInput
                        label='Address'
                        value={addressLine1.value}
                        valid={addressLine1.valid && addressLine1.valid}
                        onChange={addressLine1Change}
                        error='An address is required'
                        type='text'
                    />
                    <Row>
                        <Column xs={12} sm={12} md={6}>
                            <InputWrapper>
                                <PaddedInput
                                    label='City'
                                    value={city.value}
                                    valid={city.valid && city.valid}
                                    onChange={cityChange}
                                    error='A city is required'
                                    type='text'
                                />
                            </InputWrapper>
                        </Column>
                        <Column xs={12} sm={12} md={6}>
                            <PaddedInput
                                label='State'
                                value={state.value}
                                valid={state.valid && state.valid}
                                onChange={stateChange}
                                error='A state is required'
                                type='text'
                            />
                        </Column>
                    </Row>
                    <Row>
                        <Column xs={12} sm={12} md={6}>
                            <InputWrapper>
                                <PaddedInput
                                    label='Zipcode'
                                    value={zipcode.value}
                                    valid={zipcode.valid && zipcode.valid}
                                    onChange={zipcodeChange}
                                    error='A zipcode is required'
                                    type='text'
                                />
                            </InputWrapper>
                        </Column>
                        <Column xs={12} sm={12} md={6}>
                            <PaddedInput
                                label='Country'
                                value={country.value}
                                valid={country.valid && country.valid}
                                onChange={countryChange}
                                error='A country is required'
                                type='text'
                            />
                        </Column>
                    </Row>
                    <ButtonRow>
                        <Column xs={12} sm={12} md={6} lg={6}>
                            <ButtonWrapper>
                                <Button 
                                    label='Back'
                                    type="secondary"
                                    onClick={decrementStep}
                                />
                            </ButtonWrapper>
                        </Column>
                        <Column xs={12} sm={12} md={6} lg={6}>
                            <Button  
                                label='Submit Application'
                                type="primary"
                            />
                        </Column>
                    </ButtonRow>
                </StepBody>
            </>
        );
    }
}

ContactInfoStep.propTypes = {
    currentStep: PropTypes.number,
    incrementStep: PropTypes.func,
    decrementStep: PropTypes.func,
    firstName: PropTypes.object,
    firstNameChange: PropTypes.func,
    lastName: PropTypes.object,
    lastNameChange: PropTypes.func,
    email: PropTypes.object,
    phoneNumber: PropTypes.object,
    emailChange: PropTypes.func,
    phoneNumberchange: PropTypes.func,
    addressLine1: PropTypes.object,
    addressLine1Change: PropTypes.func,
    city: PropTypes.object,
    state: PropTypes.object,
    zipcode: PropTypes.object,
    country: PropTypes.object,
    countryChange: PropTypes.func,
    zipcodeChange: PropTypes.func,
    stateChange: PropTypes.func,
    cityChange: PropTypes.func,
    incrementStep: PropTypes.func,
    decrementStep: PropTypes.func,
}

export default ContactInfoStep;