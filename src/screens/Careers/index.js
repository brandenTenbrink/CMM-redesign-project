import React, { Component } from 'react';
import ListingPage from './ListingPage';
import PersonalInfoStep from './ContactInfoStep';
import AboutYouStep from './AboutYouStep';
import AccomplishmentsStep from './AccomplishmentsStep';

import { EMAIL_VALIDATION_REGEX, CONTAINS_NUMBER, WEBSITE_VALIDATION } from '../../constants/Regex';

class Careers extends Component {
    constructor() {
        super();

        this.state = {
            currentStep: 0,
            firstName: { value: '', valid: undefined },
            lastName: { value: '', valid: undefined },
            email: { value: '', valid: undefined },
            phoneNumber: { value: '', valid: undefined },
            addressLine1: { value: '', valid: undefined },
            city: { value: '', valid: undefined },
            state: { value: '', valid: undefined },
            zipcode: { value: '', valid: undefined },
            country: { value: '', valid: undefined },
            linkedinUrl: { value: '', valid: undefined },
            websiteUrl: { value: '', valid: undefined }
        }
    }

    incrementStep = () => this.setState({ currentStep: this.state.currentStep + 1});

    decrementStep = () => this.setState({ currentStep: this.state.currentStep - 1});

    firstNameChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ firstName: { value, valid }});
    }

    lastNameChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ lastName: { value, valid }});   
    }

    addressLine1Change = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ addressLine1: { value, valid }});   
    }

    cityChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ city: { value, valid }});   
    }

    stateChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ state: { value, valid }});   
    }

    countryChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ country: { value, valid }});   
    }

    zipcodeChange = e => {
        const value = e.target.value;
        const valid = this.basicInputValidation(value);
        this.setState({ zipcode: { value, valid }});   
    }

    emailChange = e => {
        const value = e.target.value;
        const valid = EMAIL_VALIDATION_REGEX.test(value);
        this.setState({ email: { value, valid }});   
    }

    phoneNumberChange = e => {
        const { phoneNumber } = this.state;
        const value = e.target.value.replace(/[^0-9]/g, "");
        const validInput = CONTAINS_NUMBER.test(value) || value === '';

        if ((validInput && value.length <= 10)) {
            const valid = phoneNumber.value.length >= 9;
            this.setState({
                phoneNumber: {value, valid}
            }); 
        }  
    }

    aboutMeTextChange = e => {
        const value = e.target.value;
        this.setState({ aboutMeText: value });
    }

    websiteUrlChange = e => {
        const value = e.target.value;
        const valid = WEBSITE_VALIDATION.test(value);
        this.setState({ websiteUrl: { value, valid }})
    }

    linkedinUrlChange = e => {
        const value = e.target.value;
        const valid = WEBSITE_VALIDATION.test(value);
        this.setState({ linkedinUrl: { value, valid }})
    }

    basicInputValidation = input => {
        return input.length >= 1; 
    }

    validateContactForm = () => {
        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            addressLine1,
            zipcode,
            city,
            state,
            country
        } = this.state;
        return firstName.valid && lastName.valid && email.valid && phoneNumber.valid &&
            zipcode.valid && addressLine1.valid && city.valid && state.valid && country.valid;
    }
    
    render() {
        const { 
            currentStep,
            firstName,
            lastName,
            email,
            phoneNumber,
            addressLine1,
            city,
            state,
            zipcode,
            country,
            aboutMeText,
            linkedinUrl,
            websiteUrl
         } = this.state;
        switch(currentStep) {
            case 0:
                return (
                    <ListingPage incrementStep={this.incrementStep} />
                )
            case 1:
                return (
                    <AboutYouStep 
                        currentStep={currentStep}
                        aboutMeText={aboutMeText}
                        aboutMeTextChange={this.aboutMeTextChange}
                        incrementStep={this.incrementStep}
                        decrementStep={this.decrementStep}
                    />
                )
            case 2:
                    return (
                        <AccomplishmentsStep 
                            currentStep={currentStep}
                            linkedinUrl={linkedinUrl}
                            websiteUrl={websiteUrl}
                            linkedinUrlChange={this.linkedinUrlChange}
                            websiteUrlChange={this.websiteUrlChange}
                            incrementStep={this.incrementStep}
                            decrementStep={this.decrementStep}
                        />
                    )
            case 3: 
                    return (
                        <PersonalInfoStep 
                            currentStep={currentStep}
                            firstName={firstName}
                            firstNameChange={this.firstNameChange}
                            lastName={lastName}
                            lastNameChange={this.lastNameChange}
                            email={email}
                            emailChange={this.emailChange}
                            phoneNumber={phoneNumber}
                            phoneNumberChange={this.phoneNumberChange}
                            addressLine1={addressLine1}
                            addressLine1Change={this.addressLine1Change}
                            city={city}
                            state={state}
                            zipcode={zipcode}
                            country={country}
                            countryChange={this.countryChange}
                            zipcodeChange={this.zipcodeChange}
                            stateChange={this.stateChange}
                            cityChange={this.cityChange}
                            incrementStep={this.incrementStep}
                            decrementStep={this.decrementStep}
                            validateContactForm={this.validateContactForm}
                        />
                    )
            case 3:
                return (
                    <div />
                )
            default:
                return <div />
        }
    }
}

export default Careers;