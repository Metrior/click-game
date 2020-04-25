import React, {useState} from 'react';

import {ModeInput, NameInput, Option, StartContainer, WinnerText, SettingsContainer} from "./GameSettings.styled";

import PlayButton from "../../common/PlayButton";

const GameSettings = ({winner, mode, name, gameActive, setNewName, setSettings, runGame}) => {

    const [playerName, setName] = useState('');

    const onClickHandler = () => {
        runGame()
        setName('')
    }

    const onChangeHandler = (e) => {
        setName(e.target.value)
        setNewName(e.target.value)
    }

    return (
        <>
            <StartContainer>
                <ModeInput disabled={gameActive} defaultValue={mode} onChange={(e)=>setSettings(e.target.value)} >
                    <Option name='easy Mode'>easy Mode</Option>
                    <Option name='normal Mode'>normal Mode</Option>
                    <Option name='hard Mode'>hard Mode</Option>
                </ModeInput>

                <NameInput value={playerName} maxLength="10" onChange={onChangeHandler} />
                <PlayButton value={"Play"} disabled={name===''} onClick={onClickHandler}/>
            </StartContainer>
            <WinnerText>{winner ? `${name} wins!` : null}</WinnerText>
        </>
    );
};

export default GameSettings;
