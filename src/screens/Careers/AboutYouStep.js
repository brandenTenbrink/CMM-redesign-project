import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Column, Button } from '../../componentLibrary';

import {
    ListingSubHeader,
    SubHeaderText,
    SubHeaderTitle,
    StepTracker,
    StepHeader,
    Steper,
    SubHeader,
    StepBody,
    ButtonRow,
    ButtonWrapper,
    StyledTextArea,
    AboutMeHeaderText
} from './styles';

class AboutYouStep extends Component {
    render() {
        const {
            currentStep,
            incrementStep,
            decrementStep,
            aboutMeText,
            aboutMeTextChange
        } = this.props;

        return (
            <>
                <ListingSubHeader>
                    <Row>
                        <Column xs={6} sm={6} md={8} lg={8}>
                            <Steper>
                                <StepTracker>Step {currentStep} of 3</StepTracker>  
                                <StepHeader>About You</StepHeader>
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
                    <AboutMeHeaderText>
                        Start by telling us what makes you unique. Try to be creative and say something that will catch our eye!
                    </AboutMeHeaderText>
                    <StyledTextArea 
                        value={aboutMeText}
                        placeholder="Enter up to 150 characters..."
                        maxLength='150'
                        onChange={aboutMeTextChange}
                    />
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
        )
    }
}

AboutYouStep.propTypes = {
    currentStep: PropTypes.number,
    aboutMeText: PropTypes.string,
    aboutMeTextChange: PropTypes.func,
    incrementStep: PropTypes.func,
    decrementStep: PropTypes.func,
}

export default AboutYouStep;