import React from "react";
import { Rate } from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { addProductToCart } from "../../../feartures/cart/cartSlice";
import * as S from "./ProductItem.styled";
import { currency } from "../../../utils/hel";
import { Link } from "react-router-dom";

type Props = {
  data: any,
  width?: any
};
const ProdcutsItem = (props: Props) => {
  const width = props.width ? props.width : null
  return (
    <S.ContainerItem
      style={{width : width}}
    >
      <S.ItemImage>
       <a href={`/product/${props.data.id}`}> <img src={props.data.img} alt="" width="90%" /></a>
      </S.ItemImage>
      <S.ItemTitle>
        <Link to={`/product/${props.data.id}`}><span>{props.data.name}</span></Link>
      </S.ItemTitle>
      <S.ItemPrice>
        <S.ItemPriceOrigin>
          <span>{currency(props.data.saleOffPrice)}</span>
        </S.ItemPriceOrigin>
        <S.ItemPriceSaleOrigin>
          <span>{currency(props.data.originalPrice)}</span>
        </S.ItemPriceSaleOrigin>
      </S.ItemPrice>
      <S.ItemContentSale>
        <span>{props.data.contextSale}</span>
      </S.ItemContentSale>
      <S.ItemRate>
        <Rate style={{color: "black"}} allowHalf defaultValue={props.data.rate} />
        <span>{props.data.quantityComment}đánh giá</span>
      </S.ItemRate>
    </S.ContainerItem>
  );
};

export default ProdcutsItem;
