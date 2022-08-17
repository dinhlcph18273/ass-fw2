import React, { useEffect } from "react";
import styles from "./ProductDetail.module.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import IconCart from "../../icons/IconCart";
import ProdcutsItem from "../ProductsItem";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { filter, getProduct } from "../../../feartures/products/productsSlice";
import { Breadcrumb } from "antd";
import Menu from "../../Menu";
import Footer from "../../Footer";
import { Link, useParams } from "react-router-dom";
import { currency } from "../../../utils/hel";
import { addProductToCart } from "../../../feartures/cart/cartSlice";
import { GetUser } from "../../../feartures/user/userSilice";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const {user} = useAppSelector(GetUser)
  const product = useAppSelector((item: any) => item.products.product);
  const filterProduct = useAppSelector((item: any) => item.products.value);
  const price = Number(product.originalPrice);
  const priceSale = Number(product.saleOffPrice);
  const addToCart = (product: any) => {
    const itemCart = {
      userId: user.id,
      name: product.name,
      total_price: Number(product.saleOffPrice),
      quantity: 1,
      price: Number(product.saleOffPrice),
      oriPrice: Number(product.originalPrice),
      id: product.id,
      img: product.img,
    };
    dispatch(addProductToCart(itemCart));
  };

  useEffect(() => {
    dispatch(getProduct(id)).then((res) => {
      dispatch(filter(res.payload.categoryId));
    });
  }, []);
  return (
    <>
      <Menu />
      <div style={{ maxWidth: "1230px", margin: "auto" }}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <Link to="/">
              <span>Trang chủ</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">
              <span>Điện thoại</span>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <span>{product.name}</span>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className={styles.title}>
        <h3>{product.name}</h3>
      </div>
      <div className={styles.product}>
        <div className={styles.product__left}>
          <div className={styles.product__left__images}>
            <img src={product.img} alt="" width={"90%"} />
          </div>
          <div className={styles.product__left__gallary}>
            <div className={styles.product__left__gallary__item}>
              <img
                src="https://cdn2.cellphones.com.vn/50x/media/catalog/product/l/a/layer_21.jpg"
                alt=""
              />
            </div>
            <div className={styles.product__left__gallary__item}>
              <img
                src="https://cdn2.cellphones.com.vn/50x/media/catalog/product/l/a/layer_21.jpg"
                alt=""
              />
            </div>
            <div className={styles.product__left__gallary__item}>
              <img
                src="https://cdn2.cellphones.com.vn/50x/media/catalog/product/l/a/layer_21.jpg"
                alt=""
              />
            </div>
            <div className={styles.product__left__gallary__item}>
              <img
                src="https://cdn2.cellphones.com.vn/50x/media/catalog/product/l/a/layer_21.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.product__right}>
          <div>
            <div className={styles.product__right__price}>
              <div className={styles.product__right__price__sale}>
                {currency(priceSale)}
              </div>
              <div className={styles.product__right__price__origin}>
                {currency(price)}
              </div>
            </div>
            <div className={styles.product__right__detail}>
              <p>
                {" "}
                Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản
                A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang
                đến cảm giác sang trọng và tinh tế.
              </p>
            </div>
          </div>
          <div className={styles.product__right__btn__cart}>
            <button>Mua ngay</button>
            <div>
              <button onClick={() => addToCart(product)}>
                <IconCart />
              </button>
              <span style={{ width: 80 }}>Thêm vào giỏ hàng</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.product__same}>
        <div className={styles.product__same__title}>
          <h3>Sản phẩm cùng loại</h3>
        </div>
        <div className={styles.product__same__content}>
          <Swiper spaceBetween={10} slidesPerView={3}>
            {filterProduct.map((item: any, index: any) => (
              <SwiperSlide key={index}>
                <ProdcutsItem data={item} width="100%" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className={styles.summary}>
        <div className={styles.summary__characteristics}>
          <div className={styles.summary__characteristics__title}>
            <h2>ĐẶC ĐIỂM NỔI BẬT</h2>
          </div>
          <div>
            <p>
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </p>
            <p>
              Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch,
              độ phân giải Full HD+, 120Hz mượt mà
            </p>
            <p>
              Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon
              778G, RAM lên đến 8 GB
            </p>
            <p>
              Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
              hỗ trợ sạc nhanh 25 W
            </p>
          </div>
        </div>
        <div className={styles.summary__characteristics__detail}>
          <div className={styles.summary__characteristics__detail__item}>
            <p>
              Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai
              là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp
              tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và
              cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều
              cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao
              nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
            </p>
          </div>
          <div className={styles.summary__characteristics__detail__item}>
            <div
              className={styles.summary__characteristics__detail__item__title}
            >
              <h3>
                Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
              </h3>
            </div>
            <p>
              Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
              đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
              biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về
              chiếc
            </p>
          </div>
          <div className={styles.summary__characteristics__detail__item}>
            <div
              className={styles.summary__characteristics__detail__item__title}
            >
              <h3>
                Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
              </h3>
            </div>
            <p>
              Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan
              tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo
              nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng
              và tinh tế.
            </p>
            <p>
              Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả
              năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể
              mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc
              nào.
            </p>
          </div>
          <p>
            Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ
            nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di
            chuyển dễ dàng.
          </p>
        </div>
        <div className={styles.show__more}>
          <button>Xem thêm</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
