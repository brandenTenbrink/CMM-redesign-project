import styled from 'styled-components';

const getWidthString = span => {
    if (!span) return;
    const width = span / 12 * 100;
    console.log(span, width);
    return `${width}%`;
}

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (min-width: 1px) {
        width: ${props => props.xs && getWidthString(props.xs)}
    }

    @media (min-width: 568px) {
        width: ${props => props.sm && getWidthString(props.sm)}
    }

    @media (min-width: 768px) {
        width: ${props => props.md && getWidthString(props.md)}
    }

    @media (min-width: 1200px) {
        width: ${props => props.lg && getWidthString(props.lg)}
    }
`;

export default Column;