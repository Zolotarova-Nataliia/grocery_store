import ProductsList from "../ProductsList/ProductsList";
import ProductForm from "../ProductForm/ProductForm";
import { MainSectionWrap } from "./MainSection.styled";
export default function MainSection() {
  return (
    <MainSectionWrap>
      <ProductForm></ProductForm>
      <ProductsList></ProductsList>
    </MainSectionWrap>
  );
}
