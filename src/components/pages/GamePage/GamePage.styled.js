import styled from 'styled-components';


const GameContainer = styled.div `
    display: flex;
    flex-direction: row;
`;

const GameBlock = styled.div `
    display: flex;
    flex-direction: column;
    margin: 50px 50px;
`;

const WinnersBlock = styled.div `
    background-color: #4c4c4b;
`;

export {GameBlock, GameContainer}
