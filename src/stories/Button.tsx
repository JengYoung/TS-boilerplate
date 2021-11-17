import React from 'react';
import Button from '@stories/Button';

interface Props {
  children?: ChildNode | 'string';
  props?: object[];
}
const ButtonComponent = ({ children, ...props }: Props) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonComponent;
