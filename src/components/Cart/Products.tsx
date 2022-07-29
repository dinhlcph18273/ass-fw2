import { Button, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import cartSlice from "./CartSlice";

const Products = ({ product }: any) => {
  const dispatch = useDispatch();

  const addToCart = (product: any) => {
    dispatch(cartSlice.actions.add(product));
    message.success("Thêm thành công!");
  };
  return (
    <div>
      <div className="product-container">
        <h3>Product</h3>
        <Cart>
          {product?.map((item: any, index: any) => (
            <div className="product-item" key={index}>
              <h4>{item.name}</h4>
              <div>{item.saleOffPrice}</div>
              <img style={{ width: "50%" }} src={item.image} />
              <Button type="primary" onClick={() => addToCart(item)}>
                Add to cart
              </Button>
            </div>
          ))}
        </Cart>
      </div>
    </div>
  );
};

const Cart = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export default Products;
