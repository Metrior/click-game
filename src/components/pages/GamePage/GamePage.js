import React from 'react';

import {GameBlock} from './GamePage.styled'

import GameSettings from "../GameSettings"
import Grid from "../../Grid"
import WinnersBlock from "../WinnersPage";

const GamePage = () => {
    return (
        <>
            <GameBlock>
                <GameSettings/>
                <Grid/>
            </GameBlock>
            <WinnersBlock/>
        </>
    );
};

export default GamePage;
