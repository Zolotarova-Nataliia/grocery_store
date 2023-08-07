import styled from "styled-components";
import logoPic from "../../assets/fc5bb01c7748945049b3ef42b34a6d92.jpg";

export const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: #ffff;
  justify-content: space-between;
  padding: 10px 10px 10px 0;
  z-index: 10000;
  @media screen and (min-width: 768px) {
    padding: 10px 40px;
  }
`;

export const Logo = styled.div`
  > a {
    font-family: "Gwendolyn", cursive;
    font-size: 24px;
    top: 35px;
    left: 17px;
    position: absolute;
  }
  @media screen and (min-width: 768px) {
    > a {
      font-size: 31px;
      top: 42px;
      left: 62px;
      position: absolute;
    }
  }
`;

export const LogoPic = styled.div`
  width: 120px;
  height: 94px;
  background-image: url(${logoPic});
  background-repeat: no-repeat;
  background-size: contain;
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 97px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  margin-top: -15px;
  > li {
    cursor: pointer;
    font-size: 11px;
    :not(:last-child) {
      margin-right: 6px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: -5px;
    > li {
      cursor: pointer;
      font-size: 18px;
      transition: color 200ms linear;
      :not(:last-child) {
        margin-right: 40px;
      }
      :hover {
        color: #697949;
      }
    }
  }
`;
