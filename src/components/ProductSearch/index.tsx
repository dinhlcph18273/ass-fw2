import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { currency } from "../../utils/hel";
import styles from "./ProductsSearch.module.css";
type Props = {};

const ProductsSearch = (props: Props) => {
  const producst = useAppSelector((state: any) => state.products.valueBySearch);
  const wrapperRef = useRef(null);

  const [show, setShow] = useState<any>(null);
  useEffect(() => {
    producst.length > 0 ? setShow(true) : setShow(null);
  }, [producst]);
  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(null);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  useOutsideAlerter(wrapperRef);
  return (
    show && (
      <div className={styles.wrapper} ref={wrapperRef}>
        {producst.map((item: any, index: number) => (
          <Link
            to={`product/${item.id}`}
            className={styles.container}
            key={index}
          >
            <div className={styles.content}>
              <div className={styles.img}>
                <img
                  src={item.img}
                  alt=""
                />
              </div>
              <div className={styles.main}>
                <div className={styles.header}>
                  <h3 className={styles.name}>{item.name}</h3>
                </div>
                <div className={styles.price}>
                  <div className={styles.price__sale}>
                    {item && currency(item.saleOffPrice)}
                  </div>
                  <div className={styles.price__origin}>
                    {item && currency(item.originalPrice)}
                  </div>
                  <div className={styles.price__percent}>
                    Giảm{" "}
                    {Math.floor(
                      100 - (item.saleOffPrice / item.originalPrice) * 100
                    )}
                    %
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default ProductsSearch;
