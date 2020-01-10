import React from 'react';
import {useStateValue} from "../state";
import styled from 'styled-components';

const Container = styled.div`
    background: #1e1e1e;
    color: #f4f4f4;
    padding: 0 15px;

    height: 75px;
    position: relative;
`;

const ResultBar = styled.span`
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`;

const Result = props => {
    const [{ result }, dispatch] = useStateValue();

    return(
        <Container>
            <ResultBar>{result}</ResultBar>
        </Container>
    );
}

export default Result;