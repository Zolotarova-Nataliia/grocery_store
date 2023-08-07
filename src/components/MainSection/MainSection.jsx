import ProductsList from "../ProductsList/ProductsList";
import ProductForm from "../ProductForm/ProductForm";
import {
  MainSectionWrap,
  // Background,
  // BackgroundLeaves,
} from "./MainSection.styled";
export default function MainSection() {
  return (
    <MainSectionWrap>
      <ProductForm></ProductForm>
      <ProductsList></ProductsList>
    </MainSectionWrap>
  );
}
