import styled from 'styled-components';
import { SECONDARY_COLOR } from '../../constants/styles';

const PrimaryButton = styled.button`
padding: 7.5px 20px;
font-size: 14px;
font-weight: bold;
border-radius: 16px;
color: white;
background-color: ${props => !props.disabled ? `${SECONDARY_COLOR}` : '#c6c6c6'};
box-shadow: 0 0 30px rgba(0,0,0,0.1);
width: 100%;
height: 36px;
outline: none;
`;

const SecondaryButton = styled.button`
padding: 7.5px 20px;
font-size: 14px;
font-weight: bold;
border-radius: 16px;
color: (0, 0, 0, 0.87);
background-color: ${props => !props.disabled ? '#f4f4f4' : '#c6c6c6'};
box-shadow: 0 0 30px rgba(0,0,0,0.1);
width: 100%;
height: 36px;
outline: none;
`;

export { PrimaryButton, SecondaryButton };