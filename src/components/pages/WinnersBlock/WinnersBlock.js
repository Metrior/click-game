import React from 'react';

import {WinnersContainer, Title, Name, Time, Date, Winner, Header, TableTitle} from "./WinnersBlock.styled";

const WinnersBlock = ({winnersList}) => {
    return (
        <WinnersContainer>
            <Title>Leader Board</Title>
            <Header>
                <TableTitle>Name</TableTitle>
                <TableTitle>Time</TableTitle>
                <TableTitle>Date</TableTitle>
            </Header>
            {winnersList.map((winner,index)=>(
                <Winner key={index}>
                    <Name>{winner.name}</Name>
                    <Time>{winner.time}</Time>
                    <Date>{winner.date}</Date>
                </Winner>
            ))}
        </WinnersContainer>
    );
};

export default WinnersBlock;
