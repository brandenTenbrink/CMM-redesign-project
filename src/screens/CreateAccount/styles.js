import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Input } from '../../componentLibrary';
import { SECONDARY_COLOR } from '../../constants/styles';

const CreateAccountContainer = styled.div`
margin: 0 25%;

@media(max-width: 1100px) {
    margin: 0 20%
}

@media (max-width: 568px) {
    margin: 0 10%;
}
`;

const BackgroundImage = styled.div`
background-image: url('/assets/images/background_swoops.png');
background-repeat: no-repeat;
background-position: 100% 0;
transform: scaleY(-1);
bottom: 0;
left: 0;
top: 130px;
background-size: 100%;
z-index: -1;
height: calc(100% + 130px);
width: 100%;
position: absolute;
`;

const CreateAccountCard = styled(Card)`
margin-top: 60px;
margin-bottom: 40px;
z-index: 5;
background: #fff;
font-family: Nunito Sans,sans-serif
`;

const CardHeader = styled.div`
color: #999;
font-size: 36px;
padding-bottom: 36px;
font-family: ClarendonBT-Light,Georgia,serif
`;

const LinkContainer = styled.div`
text-align: center; 
padding: 16px 0;
`;

const StyledLink = styled(Link)`
color: ${SECONDARY_COLOR};
font-size: 14px;
font-weight: 450;
`;

const PaddedInput = styled(Input)`
padding-bottom: ${props => !props.noPadding && '40px'};
width: 100%;
`;

const PasswordValidationList = styled.ul`
padding-left: 0;
padding-bottom: 12px;
list-style-type:none
`;

const PasswordValidationItem = styled.li`
color: ${props => props.valid ? '#008300' : 'rgb(0, 0, 0, 0.67)'};
padding-bottom: 8px;
padding-top: 3px;
padding-left: 32px;
font-size: 14px;
`;

export {
    CreateAccountCard,
    CardHeader,
    CreateAccountContainer,
    BackgroundImage,
    StyledLink,
    LinkContainer,
    PaddedInput,
    PasswordValidationList,
    PasswordValidationItem
}