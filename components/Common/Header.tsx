import React from 'react';
import { HeaderContainer } from './styles';
import Logo from '../Svg/Logo';
import Download from '../Svg/Download';

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo black="#03045E" white="transparent" />
      <nav>
        <a>Home</a>
        <a>About</a>
        <a>Projects</a>
        <a>Contact</a>
        <button>
          <Download black="#03045E" />
          Resume
        </button>
      </nav>
    </HeaderContainer>
  );
}
