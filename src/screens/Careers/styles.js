import styled from 'styled-components';
import { Input, Row } from '../../componentLibrary';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/styles';

const ListingSubHeader = styled.div`
background: linear-gradient(to right, 
    #E8E8E8 0%, #F3F3F3 100%);
font-family: OpenSans,Helvetica,Arial,sans-serif;
padding: 24px 32px;
`;

const SubHeaderTitle = styled.div`
font-size: 28px;
font-weight: 400;
margin: 0;
padding-bottom: 8px;

@media (max-width: 758px) {
    margin: 0 auto;
}
`;

const SubHeaderText = styled.div`
color: #666;
font-size: 14px;
padding-bottom: 12px;

@media (max-width: 758px) {
    margin: 0 auto;
}
`;

const ApplyLink = styled.div`
text-decoration: none;
padding: 20px 60px;
font-size: 16px;
font-family: PlutoSansMedium,Helvetica Neue,Arial,sans-serif;
font-weight: bold;
border-radius: 6px;
color: white;
background-color: ${PRIMARY_COLOR};
box-shadow: 0 0 30px rgba(0,0,0,0.1);
cursor: pointer;
text-align: center;
max-width: 200px;
margin: auto ${props=> props.righted ? '0' : 'auto'};
top: 50%;
&:hover {
    background-color: #F2820F;
}

@media (max-width: 758px) {
    margin: 0 auto;
}
`;

const ListingBody = styled.div`
margin: 40px 10%;
font-family: OpenSans,Helvetica,Arial,sans-serif;
`;

const StepBody = styled.div`
margin: 40px 15%;
font-family: OpenSans,Helvetica,Arial,sans-serif;
`;

const SectionHeader = styled.h3`
font-size: 20px;
color: rgb(0,0,0,.87);
font-weight: 500;
margin: 0;
padding-bottom: 8px;
`;

const SectionText = styled.div`
font-size: 14px;
color: rgb(0,0,0,.87);
`;

const SectionList = styled.ul`
margin: 0;
`;

const ListItem = styled.li`
color: rgb(0, 0, 0, .87);
font-size: 14px;
padding-bottom: 8px;
`;

const Section = styled.div`
padding-bottom: 24px;
`;

const StepTracker = styled.div`
font-size: 20px;
color: #666;
`;

const StepHeader = styled.div`
font-size: 24px;
color: ${SECONDARY_COLOR}
`;

const Steper = styled.div`
margin: auto 0;
`;

const SubHeader = styled.div`
margin: auto 0;
text-align: right;
`;

const PaddedInput = styled(Input)`
padding-bottom: ${props => !props.noPadding && '40px'};
width: 100%;
`;

const InputWrapper = styled.div`
padding-right: 24px;

@media (max-width: 758px) {
    padding-right: 0;
}
`;

const StyledTextArea = styled.textarea`
display: block;
width: 80%;
height: 125px;
border: 1px solid #666;
border-radius: 2px;
margin: 32px auto;

&::placeholder {
    font-size: 14px;
}
`;

const AboutMeHeaderText = styled.div`
font-size: 16px;
color: rgb(0, 0, 0, 0.87);
font-weight: 600;
text-align: center;
`;

const ButtonRow = styled(Row)`
justify-content: center;
`;

const ButtonWrapper = styled.div`
padding-right: 24px;

@media (max-width: 758px) {
    padding-bottom: 12px;
    padding-right: 0;
}
`;

const ResumeHeader = styled.div`
font-size: 16px;
color: rgb(0, 0, 0, 0.87);
font-weight: 600;
padding-bottom: 8px;
`;

const ResumeText = styled.div`
font-size: 14px;
color: rgb(0, 0, 0, 0.6);
font-weight: 400;
padding-bottom: 32px;
`;

export {
    ListingSubHeader,
    SubHeaderTitle,
    SubHeaderText,
    ApplyLink,
    ListingBody,
    SectionHeader,
    SectionText,
    ListItem,
    Section,
    SectionList,
    StepTracker,
    StepHeader,
    Steper,
    SubHeader,
    StepBody,
    PaddedInput,
    InputWrapper,
    StyledTextArea,
    AboutMeHeaderText,
    ButtonRow,
    ButtonWrapper,
    ResumeHeader,
    ResumeText
}