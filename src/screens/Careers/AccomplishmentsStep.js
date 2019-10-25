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
    ButtonWrapper,
    ResumeHeader,
    ResumeText
} from './styles';

import { Row, Column, Button} from '../../componentLibrary';

class AccomplishmentsStep extends Component {
    render() {
        const {
            currentStep,
            incrementStep,
            decrementStep,
            linkedinUrlChange,
            linkedinUrl,
            websiteUrl,
            websiteUrlChange
        } = this.props;

        return (
            <>
                <ListingSubHeader>
                    <Row>
                        <Column xs={6} sm={6} md={8} lg={8}>
                            <Steper>
                                <StepTracker>Step {currentStep} of 3</StepTracker>  
                                <StepHeader>Resume</StepHeader>
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
                    <ResumeHeader>Resume</ResumeHeader>
                    <ResumeText>
                        <a href='#'>Attach resume</a> as .pdf, .doc, .docx, .odt, .txt, or .rtf (limit 5MB)
                    </ResumeText>
                    <InputWrapper>
                            <PaddedInput
                                label='LinkedIn Url'
                                value={linkedinUrl.value}
                                valid={linkedinUrl.valid && linkedinUrl.valid}
                                error='Enter a valid LinkedIn url'
                                onChange={linkedinUrlChange}
                                type='text'
                            />
                    </InputWrapper>
                    <InputWrapper>
                            <PaddedInput
                                label='Website, Blog, or Portfolio'
                                value={websiteUrl.value}
                                valid={websiteUrl.valid && websiteUrl.valid}
                                onChange={websiteUrlChange}
                                error='A website is required'
                                type='text'
                            />
                    </InputWrapper>

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
                                label='Save & Continue'
                                type="primary"
                                onClick={incrementStep}
                            />
                        </Column>
                    </ButtonRow>
                </StepBody>
            </>
        );
    }

}

AccomplishmentsStep.propTypes = {
    currentStep: PropTypes.number,
    linkinUrl: PropTypes.object,
    websiteUrl: PropTypes.object,
    linkedinUrlChange: PropTypes.func,
    websiteUrlChange: PropTypes.func,
    incrementStep: PropTypes.func,
    decrementStep: PropTypes.func
}

export default AccomplishmentsStep;