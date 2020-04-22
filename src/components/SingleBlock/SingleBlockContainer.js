import React from 'react';
import {connect} from "react-redux";

import SingleBlock from "./SingleBlock"
import {submitColorChange} from "../../redux/actions";

const mapStateToProps = state => {
    return {
        timer: state.settings.delay,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        submitColorChange: (mode, name) => dispatch(submitColorChange(mode, name)),
    };
};

const SingleBlockContainer = connect(mapStateToProps, mapDispatchToProps)(SingleBlock);

export default SingleBlockContainer
