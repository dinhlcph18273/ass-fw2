import React from "react";
import { Rate } from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { addProductToCart } from "../../../feartures/cart/cartSlice";
import * as S from "./ProductItem.styled";
import { currency } from "../../../utils/hel";

type Props = {
  data: any,
  width?: any

};

const ProdcutsItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const width = props.width ? props.width : null
  const addToCart = (product: any) => {
    const itemCart = {
      name: product.name,
      total_price: Number(product.saleOffPrice),
      quantity: 1,
      price: Number(product.saleOffPrice),
      oriPrice: Number(product.originalPrice),
      id: product.id,
      img: product.img
    };
    dispatch(addProductToCart(itemCart));
  };
  return (
    <S.ContainerItem
      onClick={() => addToCart(props.data)}
      style={{width : width}}
    >
      <S.ItemImage>
        <img src={props.data.img} alt="" />
      </S.ItemImage>
      <S.ItemTitle>
        <span>{props.data.name}</span>
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
        <span>{props.data.quantityComment} đánh giá</span>
      </S.ItemRate>
    </S.ContainerItem>
  );
};

export default ProdcutsItem;
