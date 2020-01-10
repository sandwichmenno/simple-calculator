import React from 'react';
import Button from "./Button/Button";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Keypad = props => {
    return(
        <Container>
            <Button>(</Button>
            <Button>CE</Button>
            <Button>)</Button>
            <Button>C</Button>

            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>+</Button>

            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>-</Button>

            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <Button>*</Button>

            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <Button>/</Button>
        </Container>
    );
}

export default Keypad;