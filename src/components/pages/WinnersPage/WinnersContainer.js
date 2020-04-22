import React from 'react';
import {connect} from "react-redux";

import WinnersBlock from "./WinnersBlock";

const WinnersContainer = connect()(WinnersBlock)

export default WinnersContainer;
