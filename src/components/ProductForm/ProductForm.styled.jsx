import styled from "styled-components";

export const ProductFormStyled = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 300px;
  > label {
    height: 30px;
    margin-right: 15px;
    width: 100%;
    > input {
      width: 100%;
      font-size: 12px;
      background: transparent;
      border-bottom: 2px solid;
      border-color: #525f30;
      padding: 8px;
      height: 100%;
    }
  }

  > button {
    height: 30px;
    background-color: #7f8b59;
    color: #ffff;
    font-size: 10px;
    border-radius: 30px;
    width: 70px;
    font-family: "Gwendolyn", cursive;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
    > label {
      height: 40px;
      margin-right: 20px;
      width: 300px;
      > input {
        width: 100%;
        font-size: 16px;
      }
    }
    > button {
      height: 30px;
      font-size: 14px;
      width: 100px;
      transition: background-color 275ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
      &:hover {
        background-color: #525f30;
      }
    }
  }
`;
