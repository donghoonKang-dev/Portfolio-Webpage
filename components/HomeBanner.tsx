import React from 'react';
import { HomeBannerContainer } from './styles';

export default function HomeBanner(): JSX.Element {
  return (
    <HomeBannerContainer>
      <h2>
        <span>Donghoon, Kang</span>
      </h2>
      <h2>
        <span>and I'm a</span>
        <span>Front-end developer</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel diam aliquam,
        iaculis ligula vel, rhoncus odio. Aliquam nec viverra nunc. Curabitur egestas
        placerat tellus, sit amet ullamcorper mauris viverra vel. Pellentesque nec risus
        vel purus ultrices eleifend sit amet.
      </p>
    </HomeBannerContainer>
  );
}
