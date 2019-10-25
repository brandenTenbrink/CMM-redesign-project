import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../constants/styles';

const NavigationBarBase = styled.div`
height: 70px;
padding: 0 16px;
box-shadow: 0 0 5px rgba(0,0,0,.15);
z-index: 10;
margin-left: auto;
margin-right: auto;
font-family: PlutoSansLight,Helvetica Neue,Arial,sans-serif;
`;

const LogoContainer = styled.img`
height: 35px;
width: 211.4px;
padding: 17.5px 0;
`;

const LogoWrapper = styled.div`
height: 35px;
width: 211.4px;
margin: 0 auto;
`;

const ContentContainer = styled.div`
padding: 22.5px 6px;
float: right;
`;

const BackButton = styled.div`
display: inline-block;
padding: 22.5px 0;
float: left;
`;

const BackButtonText = styled.div`
color: ${SECONDARY_COLOR}
float: right;
padding-top: 4px;
font-size: 14px;
`;

const CreateAccountNavLink = styled(NavLink)`
display: inline-block;
text-decoration: none;
padding: 7.5px 20px;
font-size: 10px;
font-family: PlutoSansMedium,Helvetica Neue,Arial,sans-serif;
font-weight: bold;
border-radius: 16px;
color: white;
background-color: ${SECONDARY_COLOR};
box-shadow: 0 0 30px rgba(0,0,0,0.1);
`;

const NavigationLink = styled(NavLink)`
display: inline-block;
text-decoration: none;
font-size: 14px;
color: rgb(0, 0, 0, .87);
`;

const NavigationTextSeparator = styled.div`
display: inline-block;
font-size: 14px;
color: #888;
padding: 0 16px;
`;

export {
    NavigationBarBase,
    LogoContainer,
    ContentContainer,
    CreateAccountNavLink,
    NavigationLink,
    NavigationTextSeparator,
    LogoWrapper,
    BackButton,
    BackButtonText
}