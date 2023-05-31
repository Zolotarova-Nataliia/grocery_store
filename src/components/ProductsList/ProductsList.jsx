import {
  ProductList,
  ProductListItem,
  ProductTitle,
  ProductInfo,
  ProductBtn,
} from "./ProductsList.styled";

export default function ProductsList() {
  return (
    <div>
      <ProductList>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-08.jpg"></img>
          <ProductTitle>
            Зелені оливки, фаршировані лимоном El Toro Rojo
          </ProductTitle>
          <ProductInfo>
            <p>340 гр</p>
            <p>71 грн</p>
          </ProductInfo>

          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-21.jpg"></img>
          <ProductTitle>Сир горгонзола солодкий Gusto Bello</ProductTitle>
          <ProductInfo>
            <p>150 гр</p>
            <p>107 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-15.jpg"></img>
          <ProductTitle>Cоус песто зелений Baresa</ProductTitle>
          <ProductInfo>
            <p>190 гр</p>
            <p>95 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-05.jpg"></img>
          <ProductTitle>Льодяники з вишнею та вітаміном С Amanie</ProductTitle>
          <ProductInfo>
            <p>150 гр</p>
            <p>70 грн</p>
          </ProductInfo>

          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-12.jpg"></img>
          <ProductTitle>
            Консервований гострий перець фарширований сиром Elios
          </ProductTitle>
          <ProductInfo>
            <p>270 гр</p>
            <p>157 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-18.jpg"></img>
          <ProductTitle>Оливкова олія Extra Virgin Monterico</ProductTitle>
          <ProductInfo>
            <p>1000 мл</p>
            <p>340 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-18.jpg"></img>
          <ProductTitle>Оливкова олія Extra Virgin Monterico</ProductTitle>
          <ProductInfo>
            <p>1000 мл</p>
            <p>340 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-18.jpg"></img>
          <ProductTitle>Оливкова олія Extra Virgin Monterico</ProductTitle>
          <ProductInfo>
            <p>1000 мл</p>
            <p>340 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
        <ProductListItem>
          <img src="/photo_2023-05-10_17-50-18.jpg"></img>
          <ProductTitle>Оливкова олія Extra Virgin Monterico</ProductTitle>
          <ProductInfo>
            <p>1000 мл</p>
            <p>340 грн</p>
          </ProductInfo>
          <ProductBtn>У кошик</ProductBtn>
        </ProductListItem>
      </ProductList>
    </div>
  );
}
