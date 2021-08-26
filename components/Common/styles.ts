import styled from 'styled-components';

export const LayoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.25rem;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  nav {
    margin: auto 2rem;
    display: flex;
    align-items: center;
    color: #03045e;
    a {
      margin: 0 1.125rem;
      cursor: pointer;
    }
    button {
      margin-left: 1.125rem;
      padding: 0.25rem 0.5rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      background-color: transparent;
      border: 1px solid #03045e;
      border-radius: 8px;
      color: #03045e;
      cursor: pointer;
    }
  }
`;

export const ContentContainer = styled.main`
  width: 100%;
  max-width: 1000px;
`;
