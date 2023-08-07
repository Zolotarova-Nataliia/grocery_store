import { StyledFooter, SocialLinks, Location, Schedule } from "./Footer.styled";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaViber, FaSearchLocation } from "react-icons/fa";

export default function Footer() {
  return (
    <StyledFooter>
      <Location>
        <FaSearchLocation />

        <p>
          м. Славутич <br />
          Тбіліський квартал, 1
        </p>
      </Location>
      <Schedule>
        <p>Графік роботи:</p>
        <p>Пн-Пт: 9:00-18:00</p>
        <p>Сб-Нд: 9:00-13:00</p>
      </Schedule>

      <SocialLinks>
        <p>Ми в соцмережах:</p>
        <div>
          <a>
            <BsInstagram />
          </a>
          <a>
            <BsTelegram />
          </a>
          <a>
            <FaViber />
          </a>
        </div>
      </SocialLinks>
    </StyledFooter>
  );
}
