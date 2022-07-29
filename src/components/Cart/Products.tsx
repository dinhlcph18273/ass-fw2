import { Button, message, Typography, Row, Col } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { currency } from "../../utils/hel";
import cartSlice from "./CartSlice";

const { Title } = Typography;

const Products = ({ product }: any) => {
  const dispatch = useDispatch();

  const addToCart = (product: any) => {
    dispatch(cartSlice.actions.add(product));
    message.success("Thêm thành công!");
  };
  return (
    <div>
      <div className="product-container">
        <Title level={3}>Product</Title>
        <Row gutter={24} style={{textAlign: "center"}}>
          {product?.map((item: any, index: any) => (
            <Col key={index}>
              <img width="50%" src={item.image} />
              <Title level={5}>{item.name}</Title>
              <div>{currency(item.saleOffPrice)}</div>
              <Button type="primary" danger  onClick={() => addToCart(item)}>
                Add to cart
              </Button>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

const Cart = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default Products;
