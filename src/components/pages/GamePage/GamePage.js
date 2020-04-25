import React from 'react';

import {GameContainer, GameBlock} from './GamePage.styled'

import GameSettings from "../GameSettings"
import Grid from "../../Grid"
import WinnersBlock from "../WinnersBlock";

const GamePage = () => {
    return (
        <GameContainer>
            <GameBlock>
                <GameSettings/>
                <Grid/>
            </GameBlock>

            <WinnersBlock/>
        </GameContainer>
    );
};

export default GamePage;
