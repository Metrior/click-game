import React, {useState} from 'react';
import { connect } from 'react-redux';

import {setSettings} from "../../../redux/actions"
import {ModeInput, NameInput, Option, PlayButton} from "./GameSettingsPage.styled";

const GameSettingsPage = () => {

    const [mode, setMode] = useState('');
    const [name, setName] = useState('');

    return (
        <>
            <ModeInput value={mode} onChange={setMode} >
                <Option name='easyMode'>easy Mode</Option>
                <Option name='normalMode' selected>normalMode</Option>
                <Option name='hardMode'>hardMode</Option>
            </ModeInput>

            <NameInput value={name} onChange={setName} />
            <PlayButton onClick={()=>this.props.setSettings(mode, name)}/>
        </>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        setSettings: (mode, name) => dispatch(setSettings(mode, name)),
    };
};

export default connect(null, mapDispatchToProps)(GameSettingsPage);
