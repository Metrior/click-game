import styled from 'styled-components';

const WinnersContainer = styled.div `
    border-color: black;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    margin: 50px 100px;
`;

const Header = styled.div `
    background-color: grey;
    max-width: 300px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 0 1px;
    font-family: Sans-serif;
`;

const TableTitle = styled.div `
    width: 100px;
    height: 20px;
    font-family: Sans-serif;
`;

const Title = styled.p `
    width: 200px;
    height: 20px;
    font-family: Sans-serif;
    font-size: 30px;
`;

const Winner = styled.div `
    background-color: grey;
    max-width: 300px;
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin: 0 0 1px;
`;

const Name = styled.div `
    width: 100px;
    height: 20px;
    font-family: Sans-serif;
`;

const Time = styled.div `
    width: 100px;
    height: 20px;
    font-family: Sans-serif;
`;

const Date = styled.div `
    width: 100px;
    height: 20px;
    font-family: Sans-serif;
`;

export {WinnersContainer,Title, Winner, Name, Time, Date, Header, TableTitle}
