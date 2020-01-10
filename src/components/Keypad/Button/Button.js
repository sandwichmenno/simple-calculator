import React from 'react';
import {useStateValue} from "../../state";
import styled from 'styled-components';

const CalcButton = styled.button`
    border: 0;
    outline: 0;
    flex: 0 0 22%;
    padding: 15px 0;
    margin: 10px 0;
    background: #f4f4f4;
    border: 1px solid #e9e9e9;
    font-weight: bold;
    color: #383838;
`;

const Button = props => {
    const [{ result }, dispatch] = useStateValue();
    let type = 'ADD';

    switch(props.children) {
        case '=':
            type = 'CALCULATE';
            break;
        case 'CE':
            type = 'BACKSPACE';
            break;
        case 'C':
            type = 'CLEAR';
            break;
        default:
            type = 'ADD';
            break;
    }

    return(
        <CalcButton onClick={() => dispatch({
            type: type,
            input: props.children
        })}>{props.children}</CalcButton>
    );
}

export default Button;