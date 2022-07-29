import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { currency } from "../../utils/hel";
import cartSlice from "./CartSlice";

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
      <h3>Cart</h3>
      {cart.cart?.map((item: any, index:any) => (
        <div className="cart-item" key={index}>
          <div style={{ display: "flex" }}>
            <h4>{item.name}</h4>
            <img style={{ width: "20%" }} src={item.image} alt="" />
            <div>
              <button onClick={() => decrease(item.id)}>-</button>
              <button>{item.amount ? item.amount : 1}</button>
              <button onClick={() => increase(item.id)}>+</button>
            </div>
          </div>
          <p>{currency(item.total || item.saleOffPrice)}</p>
        </div>
      ))}
      <div className="total">
        <div>Total</div>
        <h2>{currency(cart.total)}</h2>
      </div>
    </div>
  );
};

export default Cart;
