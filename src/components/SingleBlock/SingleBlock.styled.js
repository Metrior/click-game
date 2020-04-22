import styled from 'styled-components';

const Block = styled.div `
    background-color: ${props => props.color};
    width: 30px;
    height: 30px;
    border: 1px solid black;
`;

export default Block
