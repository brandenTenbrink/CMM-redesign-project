import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Row, Column} from '../../componentLibrary';

import {
    ListingSubHeader,
    SubHeaderText,
    SubHeaderTitle,
    ApplyLink,
    ListingBody,
    SectionHeader,
    SectionText,
    ListItem,
    Section,
    SectionList,
} from './styles';

class ListingPage extends Component {
    render() {
        const { incrementStep } = this.props;

        return (
            <>
                <ListingSubHeader>
                    <Row>
                        <Column xs={12} sm={12} md={9} lg={9}>
                            <SubHeaderTitle>
                                Creative Technologist
                            </SubHeaderTitle>
                            <SubHeaderText>
                                Id: 345264 | Marketing | Columbus, OH | Full Time
                            </SubHeaderText>
                        </Column>
                        <Column xs={12} sm={12} md={3} lg={3}>
                            <ApplyLink righted={true} onClick={incrementStep}>Apply Now</ApplyLink>
                        </Column>
                    </Row>
                </ListingSubHeader>

                <ListingBody>
                    <Section>
                        <SectionHeader>Summary</SectionHeader>
                        <SectionText>
                            As a Creative Technologist at CoverMyMeds, you work with our top notch Marketing team to deliver resources that leave a lasting impression. 
                            You’re the technical expert, shaping designs into tangible assets and helping our users and clients navigate through complex concepts more easily. 
                            In collaboration with a creative team, you will develop and maintain the CoverMyMeds website as well as other digital media assets to drive awareness, 
                            adoption and revenue goals in a big way. You’ll help the Marketing team at CoverMyMeds solve problems using your understanding of innovative, immersive creativity 
                            and design experiences with expertise.
                        </SectionText>
                    </Section>
                    <Section>
                    <SectionHeader>What You'll Do</SectionHeader>
                        <SectionList>
                            <ListItem>
                                Design, build and code engaging web experiences that align to marketing objectives
                            </ListItem>
                            <ListItem>
                                Architect front-end solutions using the latest front-end technologies
                            </ListItem>
                            <ListItem>
                            Provide technical guidance through design, implementation, launch, and maintenance of the website
                            </ListItem>     
                            <ListItem>
                                Bridge the gap between the art of design and the art of programming
                            </ListItem>
                            <ListItem>
                                Transform static wireframes into interactive prototypes
                            </ListItem> 
                            <ListItem>
                                Accurately scope budget, timelines, and other estimates for development tasks
                            </ListItem> 
                            <ListItem>
                                Effectively communicate project status and challenges with both technical and non-technical stakeholders throughout the business
                            </ListItem>  
                            <ListItem>Assist in the QA and testing process</ListItem> 
                            <ListItem>
                                Make technical SEO enhancements and communicate the impact
                            </ListItem> 
                            <ListItem>
                            Stay up to date on the current trends in design and technology, understand how to use them, and implement on our website.
                            </ListItem>
                        </SectionList>
                    </Section>
                    <Section>
                        <SectionHeader>About You</SectionHeader>
                        <SectionList>
                            <ListItem>5+ years of professional work experience as a Front End Developer or Web Designer</ListItem>
                            <ListItem>Portfolio – being able to share your involvement and collaboration in each project</ListItem>
                            <ListItem>Deep understanding of JavaScript and interest in libraries and frameworks such as Vue, React, Nuxt, and</ListItem>
                        </SectionList>
                    </Section>

                    <ApplyLink onClick={incrementStep}>Apply Now</ApplyLink>
                </ListingBody>
            </>
        );
    }
}

ListingPage.propTypes = {
    incrementStep: PropTypes.func,
}

export default ListingPage;