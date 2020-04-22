import React, {useEffect} from 'react';

import Block from "./SingleBlock.styled"

const SingleBlock = ({color, timer, submitColorChange}) => {

    let timeOut;

    useEffect(() => {
        if (color==="blue") {
            timeOut = setTimeout(()=>{
                submitColorChange("red")
            }, timer)
        }
    });

    const clickHandler = () => {
        if (color==="blue") {
            clearTimeout(timeOut)
            submitColorChange("green")
        }
    }

    return (
        <Block color={color} onClick={()=>clickHandler()}/>
    );
};

export default SingleBlock;
