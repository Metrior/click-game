import React from 'react';

import {Button} from "./PlayButton.styled";

const PlayButton = ({value, disabled, onClick}) => {
    return (
        <Button disabled={disabled} onClick={()=>onClick()}>{value}</Button>
    );
};

export default PlayButton;
