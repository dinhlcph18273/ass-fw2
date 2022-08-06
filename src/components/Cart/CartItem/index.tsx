import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  decProductToCart,
  incProductToCart,
  removeCartItem,
} from "../../../feartures/cart/cartSlice";
import { currency } from "../../../utils/hel";
import IconClose from "../../icons/IconClose";
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
      <S.Main>
        <S.Header>
          <h3>{data.name}</h3>
          <div onClick={()=> dispatch(removeCartItem(data.id))}>
            <IconClose />
          </div>
        </S.Header>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 20,
            alignItems: "center",
          }}
        >
          <S.Price>{currency(data.total_price)}</S.Price>
          <S.ItemPriceSaleOrigin>
            {currency(data.oriPrice)}
          </S.ItemPriceSaleOrigin>
          <S.PricePercent>Giảm 27%</S.PricePercent>
        </div>
        <S.Quantity>
          <span>Chọn số lượng:</span>
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
        <S.Sale>
            <p>Chương trình khuyến mãi:</p>
            <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
            <p>
              Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3,
              Phúc Long, Galaxy Play)
            </p>
          </S.Sale>
      </S.Main>
    </S.Container>
  );
};

export default CartItem;
