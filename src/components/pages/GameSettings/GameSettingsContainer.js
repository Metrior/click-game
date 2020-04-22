import React from 'react';
import {connect} from 'react-redux'

import GameSettings from "./GameSettings";
import {setSettings, setPlayerName, runGame} from "../../../redux/actions";

const mapStateToProps = state => {
    return {
        mode: state.settings.mode,
        name: state.settings.name,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSettings: (mode) => dispatch(setSettings(mode)),
        setPlayerName: (name) => dispatch(setPlayerName(name)),
        runGame: () => dispatch(runGame()),
    };
};

const GameSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(GameSettings)

export default GameSettingsContainer;
