import styled from 'styled-components';

const InputWrapper = styled.div`
position: relative;
`;

const StyledInput = styled.input`
height: 26px;
font-size: 16px;
color: rgb(0, 0, 0, 0.6);
border: none;
border-bottom: 1px solid ${props => props.valid === undefined ? '#888' : props.valid ? '#008300' : '#d32f2f'};
outline: none;
width: 100%;
`;

const FloatingPlaceholder = styled.div`
position: absolute;
left: 0;
top: ${props => props.isFocused ? '-16px' : '4px' };
font-size: ${props => props.isFocused ? '12px' : '16px'};
color: ${props => props.valid === undefined ? '#888' : props.valid ? '#008300' : '#d32f2f'};
pointer-events: none;
`;

const ErrorText = styled.div`
color: #d32f2f;
font-size: 12px;
`;

export {
    InputWrapper,
    FloatingPlaceholder,
    StyledInput,
    ErrorText
}