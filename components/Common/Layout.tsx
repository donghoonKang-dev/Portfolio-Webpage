import React from 'react';
import { LayoutContainer, ContentContainer } from './styles';
import Header from './Header';
import HomeBanner from 'components/HomeBanner';
import AboutInfo from 'components/AboutInfo';

export default function Layout(): JSX.Element {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <HomeBanner />
        <AboutInfo />
      </ContentContainer>
    </LayoutContainer>
  );
}
