import React from 'react';
import { HeaderContainer } from './styles';
import Link from 'next/link';
import Logo from '../Svg/Logo';
import Download from '../Svg/Download';

export default function Header(): JSX.Element {
  return (
    <HeaderContainer>
      <Logo black="#03045E" white="transparent" />
      <nav>
        <Link href="#Home">
          <a>Home</a>
        </Link>
        <Link href="#About">
          <a>About</a>
        </Link>
        <Link href="#Projects">
          <a>Projects</a>
        </Link>
        <Link href="#Contact">
          <a>Contact</a>
        </Link>
        <button>
          <Download />
          Resume
        </button>
      </nav>
    </HeaderContainer>
  );
}
