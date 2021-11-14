import React from "react";
import ReactDOM from "react-dom";

/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const DateCSS = css`
  background-color: black;
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
