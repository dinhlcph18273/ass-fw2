import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  decProductToCart,
  incProductToCart,
} from "../../../feartures/cart/cartSlice";
import { currency } from "../../../utils/hel";
import * as S from "./CartItem.styled";
type Props = {
  data: any;
};

const CartItem = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <S.Container>
      <div>
        <img src={data.img} alt="" style={{ width: "100%" }} />
      </div>
      <div>
        <h3>{data.name}</h3>
        <div style={{display:"flex", gap:5, alignItems:"center"}}>
          <S.Price>{currency(data.total_price)}</S.Price>
          <S.ItemPriceSaleOrigin>
            {currency(data.oriPrice)}
          </S.ItemPriceSaleOrigin>
        </div>
        <S.Quantity>
          <div>Chọn số lượng:</div>
          <S.GroupQuantity>
            <S.Btn
              style={{ borderRight: "none" }}
              onClick={() => dispatch(decProductToCart(data.id))}
            >
              -
            </S.Btn>
            <S.InputQuantity>{data.quantity}</S.InputQuantity>
            <S.Btn
              style={{ borderLeft: "none" }}
              onClick={() => dispatch(incProductToCart(data.id))}
            >
              +
            </S.Btn>
          </S.GroupQuantity>
        </S.Quantity>
      </div>
    </S.Container>
  );
};

export default CartItem;
