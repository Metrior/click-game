import React from 'react';
import {connect} from "react-redux";

import WinnersBlock from "./WinnersBlock";

const mapStateToProps = state => {
    return {
        winnersList: state.game.winnersList,
    };
};

const WinnersContainer = connect(mapStateToProps, null)(WinnersBlock)

export default WinnersContainer;
