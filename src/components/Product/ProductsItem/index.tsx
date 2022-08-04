import React from "react";
import { Rate } from "antd";
import { useAppDispatch } from "../../../app/hooks";
import { addProductToCart } from "../../../feartures/cart/cartSlice";
import * as S from "./ProductItem.styled";
import phone from '../../../assets/images/Rectangle (1).png'

type Props = {
  data: any;
};

const ProdcutsItem = (props: Props) => {
  const dispatch = useAppDispatch();
  const addToCart = (product: any) => {
    const itemCart = {
      name: product.name,
      total_price: Number(product.saleOffPrice),
      quantity: 1,
      price: Number(product.saleOffPrice),
      id: product.id,
    };
    dispatch(addProductToCart(itemCart));
  };
  return (
    <S.ContainerItem
      onClick={() => addToCart(props.data)}
    >
      <S.ItemImage>
        <img src={phone} alt="" />
      </S.ItemImage>
      <S.ItemTitle>
        <span>{props.data.name}</span>
      </S.ItemTitle>
      <S.ItemPrice>
        <S.ItemPriceOrigin>
          <span>{props.data.saleOffPrice} ₫</span>
        </S.ItemPriceOrigin>
        <S.ItemPriceSaleOrigin>
          <span>{props.data.originalPrice} ₫</span>
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
