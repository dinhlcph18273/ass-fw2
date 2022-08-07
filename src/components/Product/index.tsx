import React, { useEffect } from "react";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import styled from "styled-components";
import ProdcutsItem from "./ProductsItem";
import { getCardProducts } from "../../feartures/products/productsSlice";

type Props = {};

const ProductsCard = (props: Props) => {
  const data = useAppSelector((item: any) => item.products.value);
  console.log(data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    (async()=> {
      await dispatch(getCardProducts());
    })()
  }, []);
  return (
    <Container>
      <Title>
        <h2>ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
      </Title>
      <Content>
        {data.map((product: any) => (
          <ProdcutsItem data={product} key={product.id} />
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 75px;
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 15px;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px 30px;
`;
export default ProductsCard;
