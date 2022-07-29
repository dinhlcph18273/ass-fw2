import Header from "../../components/Header";
import Menu from "../../components/Menu";
import * as S from "../../App.styled";
import Footer from "../../components/Footer";
import ProductsCard from "../../components/Product";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <S.Container>
      <div>
        <Menu />
      </div>
      <S.Header>
        <Header />
        <ProductsCard />
      </S.Header>
      <S.Foot>
        <Footer />
      </S.Foot>
    </S.Container>
  );
};

export default HomePage;
