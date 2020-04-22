import styled from 'styled-components';

const ScalableGrid = styled.div `
    width: ${props=>props.gridSide*10}px;
    display: grid;
    grid-column-gap: 0;
    grid-template-columns: repeat(${props=>props.gridSide}, 1fr);
`;

export {ScalableGrid}
