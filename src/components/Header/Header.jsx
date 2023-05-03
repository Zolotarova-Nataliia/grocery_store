import { Logo, LogoPic, NavigationList, HeaderWrap } from "./Header.styled";

export default function Header() {
  return (
    <HeaderWrap>
      <Logo>
        <LogoPic></LogoPic>
        <a>MarkTim</a>
      </Logo>
      <nav>
        <NavigationList>
          <li>
            <a>Головна</a>
          </li>
          <li>
            <a>В наявності</a>
          </li>
          <li>
            <a>Передзамовлення</a>
          </li>
          <li>
            <a>Кошик</a>
          </li>
        </NavigationList>
      </nav>
    </HeaderWrap>
  );
}
