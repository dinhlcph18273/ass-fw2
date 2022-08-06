import React from "react";

import * as S from "./Menu.styled";
import InputSearch from "../Input/Search";
import ServiceBtn from "../Buttons/Services";
import deliveryImage from "../../assets/images/delivery.svg";
import vector from "../../assets/images/address.svg";
import shopping from "../../assets/images/shopping.svg";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

type Props = {};

const Menu = (props: Props) => {
  return (
    <S.Wrapper>
      <S.Container>
        <Link to="/">
          <S.Logo src={logo} />
        </Link>
        <InputSearch />
        <S.Services>
          <ServiceBtn
            image={``}
            link={``}
            title1="Gọi mua hàng"
            title2="1800.2097"
          />
          <ServiceBtn
            image={vector}
            link={``}
            title1="Tra cứu"
            title2="đơn hàng"
          />
          <ServiceBtn
            image={deliveryImage}
            link={`/`}
            title1="Tra cứu"
            title2="đơn hàng"
          />
          <ServiceBtn
            image={shopping}
            link={`/cart`}
            title1="Giỏ"
            title2="hàng"
          />
        </S.Services>
      </S.Container>
    </S.Wrapper>
  );
};

export default Menu;
