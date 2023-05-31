import { ProductFormStyled } from "./ProductForm.styled";

export default function ProductForm() {
  return (
    <ProductFormStyled>
      <label>
        <input placeholder="Введіть назву товару.."></input>
      </label>
      <button>Пошук</button>
    </ProductFormStyled>
  );
}
