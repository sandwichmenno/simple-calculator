import React from 'react';

import Result from './components/Result/Result';

import {StateProvider} from "./components/state";
import Keypad from "./components/Keypad/Keypad";
import styled from 'styled-components';

const Calculator = styled.div`
        width: 25%;
        background: #f2f2f2;
        box-shadow: -2px 2px 0px 2px rgba(194,194,196,1);
        border-radius: 5px;
    `;

function App() {
  const initialState = {
    result: ""
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        console.log("add");
        return {
          result: state.result + action.input
        };
      case 'CALCULATE':
        return {
          result: eval(state.result)
        };
      case 'CLEAR':
        return {
          result: ''
        };
      case 'BACKSPACE':
        return {
          result: (state.result).slice(0, -1)
        };

      default:
        return state;
    }
  };

  return (
      <StateProvider initialState={initialState} reducer={reducer}>
        <Calculator>
          <Result />
          <Keypad/>
        </Calculator>
      </StateProvider>
  );
}

export default App;
