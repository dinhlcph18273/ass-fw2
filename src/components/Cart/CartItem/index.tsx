import React from "react";
import { useAppDispatch } from "../../../app/hooks";
import { decProductToCart, incProductToCart } from "../../../feartures/cart/cartSlice";
import phone from '../../../assets/images/Rectangle (1).png'

import styles from "./CartItem.module.css";
type Props = {
  data: any;
};

const CartItem = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.name}>{data.name}</h3>
        <span className={styles.price}>{data.total_price} ₫</span>
      </div>
      <div className={styles.content}>
        <div className={styles.img}>
          <img
            src={phone}
            alt=""
          />
        </div>
        <div className={styles.quantity}>
          <div className={styles.group_quantity}>
            <button
              className={styles.btn}
              onClick={() => dispatch(decProductToCart(data.id))}
            >
              -
            </button>
            <span className={styles.input_quantity}>{data.quantity}</span>
            <button
              className={styles.btn}
              onClick={() => dispatch(incProductToCart(data.id))}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
