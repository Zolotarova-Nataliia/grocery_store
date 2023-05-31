import styled from "styled-components";

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 40px 20px 0 20px;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
export const ProductTitle = styled.p`
  height: 45px;
  font-size: 10px;
  margin-bottom: 10px;
  color: #525f30;
  font-weight: bold;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 768px) {
    height: 65px;
    font-size: 13px;
  }
  @media screen and (min-width: 1280px) {
    height: 80px;
    font-size: 16px;
  }
`;

export const ProductListItem = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-bottom: 20px;
  padding: 15px;
  max-width: 200px;

  > img {
    min-width: 80px;
    min-height: 100px;
    max-height: 170px;
    max-width: 170px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    transition: all 275ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    > img {
      min-width: 80px;
      min-height: 100px;
      max-width: 275px;
    }
    &:hover {
      border-radius: 5px;
      transform: scale(1.05);
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.12),
        0px 3px 4px rgba(0, 0, 0, 0.09), 1px 4px 6px rgba(0, 0, 0, 0.16);
    }
  }
`;

export const ProductInfo = styled.div`
  > p {
    font-size: 10px;
    color: #00000;
    font-weight: bold;
  }
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    > p {
      font-size: 12px;
    }
  }
`;

export const ProductBtn = styled.button`
  width: 100%;
  height: 30px;
  background-color: #7f8b59;
  color: #ffff;
  font-size: 10px;
  border-radius: 30px;
  font-family: "Gwendolyn", cursive;

  @media screen and (min-width: 768px) {
    font-size: 13px;
    height: 40px;

    transition: background-color 275ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    &:hover {
      background-color: #525f30;
    }
  }
`;
