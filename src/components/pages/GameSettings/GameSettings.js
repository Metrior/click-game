import React, {useState} from 'react';
import { connect } from 'react-redux';

import {setSettings} from "../../../redux/actions"
import {ModeInput, NameInput, Option, PlayButton} from "./GameSettings.styled";

const GameSettings = ({mode, name, setPlayerName, setSettings, runGame}) => {

    return (
        <>
            <ModeInput defaultValue={mode} onChange={(e)=>setSettings(e.target.value)} >
                <Option name='easy Mode'>easy Mode</Option>
                <Option name='normal Mode'>normal Mode</Option>
                <Option name='hard Mode'>hard Mode</Option>
            </ModeInput>

            <NameInput value={name} onChange={(e)=>setPlayerName(e.target.value)} />
            <PlayButton disablled={name} onClick={()=>runGame()}>Play</PlayButton>
        </>
    );
};

export default GameSettings;
