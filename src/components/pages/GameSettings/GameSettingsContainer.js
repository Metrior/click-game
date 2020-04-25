import React from 'react';
import {connect} from 'react-redux'

import GameSettings from "./GameSettings";
import {setSettings, setNewName, runGame} from "../../../redux/actions";

const mapStateToProps = state => {
    return {
        mode: state.settings.mode,
        name: state.settings.name,
        gameActive: state.game.gameActive,
        winner: state.game.winner,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSettings: (mode) => dispatch(setSettings(mode)),
        setNewName: (name) => dispatch(setNewName(name)),
        runGame: () => dispatch(runGame()),
    };
};

const GameSettingsContainer = connect(mapStateToProps, mapDispatchToProps)(GameSettings)

export default GameSettingsContainer;
