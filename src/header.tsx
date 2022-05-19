import type React from 'react';
import {
  classes,
  st
} from './header.st.css';
import { Button } from 'wix-style-react';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={st(classes.root, className)}>
      <h1 className={classes.title}>
        <Button>Click me!</Button>;
      </h1>
    </header>
  );
};
