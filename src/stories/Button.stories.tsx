import styled from '@emotion/styled';
import React from 'react';

const Button = styled.button`
  background: black;
`;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {},
};

const Template = () => <Button>Test!</Button>;

export const Default = Template.bind({});
