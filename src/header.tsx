import type React from 'react';
import {
  classes,
  st
} from './header.st.css';
import { Heading } from 'wix-style-react';

export interface HeaderProps {
  className?: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={st(classes.root, className)}>
      <h1 className={classes.title}>
        <Heading appearance="H1">You made it!</Heading>
      </h1>
    </header>
  );
};
