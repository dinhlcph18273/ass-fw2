import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../Cart";
import Products from "../Cart/Products";

type Props = {};

const ProductsCard = (props: Props) => {
  const [products, setProducts] = useState<any[]>([]);
  const fetchProduct = async () => {
    const {data} = await axios.get(`https://62de615accdf9f7ec2d66ae3.mockapi.io/api/products`)
    setProducts(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div>
      <Products product={products} />
      <Cart />
    </div>
  );
};

export default ProductsCard;
