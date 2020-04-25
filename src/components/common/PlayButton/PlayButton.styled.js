import styled from "styled-components";

const Button = styled.button `
    background-color: ${props=>props.disabled ? "grey" : "black"};
    color: white;
    width: 100px;
    height: 30px;
    border-radius: 25px;
`;

export {Button}
