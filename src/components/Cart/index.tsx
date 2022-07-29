import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../../utils/hel";
import cartSlice from "./CartSlice";
import { Col, Divider, Row, Typography, Button, InputNumber } from "antd";

const { Title } = Typography;

type Props = {};

const Cart = (props: Props) => {
  const { cart, products, total }: any = useSelector((store) => store);

  const dispatch = useDispatch();
  const increase = (id: any) => {
    dispatch(cartSlice.actions.increase(id));
  };
  const decrease = (id: any) => {
    dispatch(cartSlice.actions.decrease(id));
  };
  console.log(cart);

  return (
    <div className="cart-container">
      <Title level={3}>Cart</Title>
      {cart.cart?.map((item: any) => (
        <Row key={item.id}>
          <Col span={20}>
            <Title level={5}>{item.name}</Title>
            <Row>
              <Col>
                <img width="50%" src={item.image} />
              </Col>
              <Col>
                <Typography>Số lượng</Typography>
                <Row>
                  <Button onClick={() => decrease(item.id)}>-</Button>
                  <Col>
                    <InputNumber value={item.amount ? item.amount : 1} />
                  </Col>
                  <Col>
                    <Button onClick={() => increase(item.id)}>+</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
              <Title level={5}>{currency(item.total || item.saleOffPrice)}</Title>
          </Col>
        </Row>
      ))}
      <Divider/>

      <Row>
        <Col span={20}>Total</Col>
        <Col span={4}><Title level={3} style={{color: "red"}}>{currency(cart.total)}</Title></Col>
      </Row>
    </div>
  );
};

export default Cart;
