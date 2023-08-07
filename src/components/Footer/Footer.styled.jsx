import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #869365;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100px;
  padding: 20px;
  align-items: flex-start;
  flex: 0 0 auto;
  font-size: 10px;
  color: #ffffff;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    padding: 40px 60px;
    height: 150px;
    font-size: 15px;
  }
`;

export const Schedule = styled.div`
  color: #434e24;
  font-weight: bold;
  > p {
    :first-child {
      color: #ffffff;
    }
  }
`;

export const SocialLinks = styled.nav`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > a {
      > svg {
        color: #434e24;
        height: 20px;
        width: 20px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    > p {
      font-size: 15px;
    }
    > div {
      > a {
        > svg {
          height: 30px;
          width: 30px;
        }
      }
    }
  }
`;

export const Location = styled.div`
  display: flex;
  flex-direction: row;
  > svg {
    color: #434e24;
    height: 20px;
    width: 20px;
  }

  @media screen and (min-width: 768px) {
    > svg {
      height: 30px;
      width: 30px;
    }
  }
`;
