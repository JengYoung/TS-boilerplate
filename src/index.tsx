import React from "react";
import ReactDOM from "react-dom";

import styled from '@emotion/styled';

const HelloEmotion = styled.h1`
  color: red;
`;

const App = () => {
  return (
    <HelloEmotion>My React and TypeScript App!{new Date().toLocaleDateString()}</HelloEmotion>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
