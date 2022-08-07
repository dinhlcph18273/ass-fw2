import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "../../App.styled";
import Footer from "../../components/Footer";
import ProductsCard from "../../components/Product";
import Cart from "../../components/Cart";
import ListCategory from "../../components/ListCategory/indexl";
import USB from "../../assets/images/USB.png";
import DQ from "../../assets/images/DQ.png";
import PK from "../../assets/images/PK.png";
import CL from "../../assets/images/CL.png";
import OL from "../../assets/images/OL.png";
import CS from "../../assets/images/CS.png";
import TP from "../../assets/images/TP.png";
import C from "../../assets/images/C.png";
import AP from "../../assets/images/AP.png";
import AI from "../../assets/images/AI.png";
import CMR from "../../assets/images/CMR.png";
import DP from "../../assets/images/DP.png";
import TC from "../../assets/images/TC.png";
import SP from "../../assets/images/SP.png";
import LT from "../../assets/images/LT.png";
import MN from "../../assets/images/MN.png";
import BL from "../../assets/images/BL.png";
import D from "../../assets/images/D.png";
import OC from "../../assets/images/OC.png";
import PC from "../../assets/images/PC.png";
import CPU from "../../assets/images/CPU.png";
import MA from "../../assets/images/MA.png";
import RAM from "../../assets/images/RAM.png";
import ME from "../../assets/images/ME.png";
import CA from "../../assets/images/CA.png";
import N from "../../assets/images/N.png";
import TN from "../../assets/images/TN.png";
import CASE from "../../assets/images/CASE.png";
import { BackTop } from "antd";

type Props = {};
const color = [
  { id: 1, color: "#FFA3A3" },
  { id: 2, color: "#FF94EB" },
  { id: 3, color: "#E0B3FF" },
  { id: 4, color: "#4D91FF" },
  { id: 5, color: "#F5D63D" },
  { id: 6, color: "#FDA363" },
  { id: 7, color: "#FF6666" },
  { id: 8, color: "#D6D6D6" },
  { id: 9, color: "#6BCEFF" },
  { id: 10, color: "#FFD1E1" },
  { id: 11, color: "#FCD34B" },
  { id: 12, color: "#D6D6D6" },
  { id: 13, color: "#EFC2FF" },
  { id: 14, color: "#4D91FF" },
  { id: 15, color: "#C4B5FD" },
];
const cateAccessory = {
  title: "Phụ kiện",
  data: [
    {
      id: 1,
      name: "Nổi bật",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: DQ,
    },
    {
      id: 2,
      name: "Phụ kiện Apple",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: PK,
    },
    {
      id: 3,
      name: "Dán màn hình",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: CL,
    },
    {
      id: 4,
      name: "Ốp lưng - Bao da",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: OL,
    },
    {
      id: 5,
      name: "Cáp, sạc",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: CS,
    },
    {
      id: 6,
      name: "Pin dự phòng",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: DP,
    },
    {
      id: 7,
      name: "Thiết bị mạng",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: TP,
    },
    {
      id: 8,
      name: "Camera",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: CMR,
    },
    {
      id: 9,
      name: "Chuột, bàn phím",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: C,
    },
    {
      id: 10,
      name: "Thẻ nhớ, USB",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: USB,
    },
    {
      id: 11,
      name: "Apple Care",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: AP,
    },
    {
      id: 12,
      name: "Dây đeo Airtag",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: AI,
    },
    {
      id: 13,
      name: "Gaming Gear",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: TC,
    },
    {
      id: 14,
      name: "Phụ kiện chụp ảnh",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: SP,
    },
    {
      id: 15,
      name: "Phụ kiện Laptop",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: LT,
    },
    {
      id: 16,
      name: "Quạt mini",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: MN,
    },
    {
      id: 17,
      name: "Balo, túi chống sốc",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: BL,
    },
    {
      id: 18,
      name: "Dây đeo đồng hồ",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: D,
    },
    {
      id: 19,
      name: "Ổ cứng đi động",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: OC,
    },
  ],
};
const cateConputer = {
  title: "Linh kiện máy tính",
  data: [
    {
      id: 1,
      name: "PC ráp sẵn CellphoneS",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: PC,
    },
    {
      id: 2,
      name: "CPU",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: CPU,
    },
    {
      id: 3,
      name: "Mainboard",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: MA,
    },
    {
      id: 4,
      name: "Ram",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: RAM,
    },
    {
      id: 5,
      name: "Ổ cứng",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: ME,
    },
    {
      id: 6,
      name: "Card màn hình",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: CA,
    },
    {
      id: 7,
      name: "Nguồn máy tính",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: N,
    },
    {
      id: 8,
      name: "Tản nhiệt",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: TN,
    },
    {
      id: 9,
      name: "Case máy tính",
      color: color[Math.floor(Math.random() * color.length)].color,
      img: CASE,
    },
  ],
};
const style: React.CSSProperties = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#D70018',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};
const HomePage = (props: Props) => {
  return (
    <S.Container>
      <div>
        <Menu />
      </div>
      <S.Header>
        <Header />
      </S.Header>
      <ProductsCard />
      <ListCategory data={cateAccessory} />
      <ListCategory data={cateConputer} />
      <S.Foot>
        <Footer />
      </S.Foot>
      <BackTop>
      <div style={style}>Lên đầu</div>
    </BackTop>
    </S.Container>
  );
};

export default HomePage;
