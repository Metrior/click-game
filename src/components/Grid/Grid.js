import React, {useEffect, useRef} from 'react';

import {ScalableGrid} from "./Grid.styled"
import SingleBlock from "../SingleBlock"

const Grid = ({array, gridSide, createArray}) => {

    useEffect(() => {
        if (!array) {
            createArray(gridSide)
        }
    },[array]);

    return (
        <ScalableGrid gridSide={gridSide}>
            {array ? array.map((block, i)=>(<SingleBlock key={i} color={block}/>)) : null}
        </ScalableGrid>
    );
};

export default Grid;
