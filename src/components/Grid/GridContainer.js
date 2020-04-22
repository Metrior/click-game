import React from 'react';
import {connect} from "react-redux";

import {createArray} from "../../redux/actions"

import Grid from "./Grid";

const mapStateToProps = state => {
    return {
        array: state.game.array,
        gridSide: state.settings.sideSize,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createArray: (gridSide) => dispatch(createArray(gridSide)),
    };
};

const GridContainer = connect(mapStateToProps, mapDispatchToProps)(Grid)

export default GridContainer;
