import styled from 'styled-components';

export const HomeBannerContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    margin-bottom: 1.5rem;
    font-size: 80px;
    font-weight: 700;
  }
  h2:first-of-type {
    color: #03045e;
  }
  h2:last-of-type {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    span:first-of-type {
      font-size: 40px;
      font-weight: 300;
      color: #808080;
    }
    span:last-of-type {
      color: #1974d2;
    }
  }
  p {
    margin-top: 1rem;
    text-align: center;
    font-size: 18px;
    line-height: 1.7;
    font-weight: 300;
    color: #808080;
  }
`;

export const AboutInfoContainer = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    h3 {
      span:first-of-type {
        font-size: 36px;
        font-weight: 700;
        letter-spacing: 4px;
        color: #03045e;
      }
      span:last-of-type {
        margin-left: 0.875rem;
        font-size: 24px;
        color: #808080;
      }
    }
    .about-list {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: row;
      ul {
        li {
          font-size: 24px;
          line-height: 1.5;
        }
        h4 {
          margin: 2.5rem 0 0.75rem 0;
          display: flex;
          flex-direction: row;
          align-items: center;
          font-weight: 700;
          color: #03045e;
          fill: #03045e;
        }
      }
      ul:last-of-type {
        margin-left: 3rem;
        li {
          margin-bottom: 0.55rem;
          font-size: 18px;
        }
        h4 {
          margin-bottom: 0.75rem;
          font-size: 24px;
        }
      }
    }
  }
  .picture-container {
    width: 22.5rem;
    height: 30rem;
    border: 1px solid #03045e;
    position: relative;
    img {
      position: absolute;
      top: 1.125rem;
      left: 1.125rem;
      width: 22.5rem;
      height: 30rem;
    }
  }
`;
