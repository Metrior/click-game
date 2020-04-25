import styled from 'styled-components';

const StartContainer = styled.div `
    background-color: white;
    width: 350px;
    height: 40px;
    display: flex;
    justify-content: space-between;
`;

const ModeInput = styled.select `
    background-color: white;
    width: 100px;
    height: 30px;
`;

const Option = styled.option `
    background-color: #4c4c4b;
`;

const NameInput = styled.input `
    background-color: white;
    width: 100px;
    height: 22px;
`;

const WinnerText = styled.div `
    height: 40px;
    margin: 0 auto;
    font-family: Sans-serif;
`;

export {NameInput, ModeInput, Option, StartContainer, WinnerText}
