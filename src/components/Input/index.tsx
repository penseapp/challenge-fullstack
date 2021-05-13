import { InputHTMLAttributes, useRef } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input = ({ name, icon: Icon, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input ref={inputRef} {...rest} />
    </Container>
  );
}

export default Input;
