import React from "react";
import ReactDOM from "react-dom";

import styled from '@emotion/styled';
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const DateCSS = css`
  background-color: green;
`;
const HelloEmotion = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <HelloEmotion>My React and TypeScript App!
      <div css={DateCSS}>{new Date().toLocaleDateString()}</div>
    </HelloEmotion>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
