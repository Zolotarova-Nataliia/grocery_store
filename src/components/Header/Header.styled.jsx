import styled from "styled-components";
import logoPic from "../../assets/fc5bb01c7748945049b3ef42b34a6d92.jpg";

export const HeaderWrap = styled.header`
  border-bottom: 2px solid #525f30;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 0;
  @media screen and (min-width: 768px) {
    padding: 20px 40px;
  }
`;

export const Logo = styled.div`
  > a {
    font-family: "Gwendolyn", cursive;
    font-size: 24px;
    top: 45px;
    left: 17px;
    position: absolute;
  }
  @media screen and (min-width: 768px) {
    > a {
      font-size: 48px;
      top: 73px;
      left: 53px;
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
    width: 200px;
    height: 162px;
  }
`;

export const NavigationList = styled.ul`
  display: flex;
  margin-top: 5px;
  > li {
    cursor: pointer;
    font-size: 11px;
    :not(:last-child) {
      margin-right: 6px;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    > li {
      cursor: pointer;
      font-size: 20px;
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
