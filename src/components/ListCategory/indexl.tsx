import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CateogryItem from "./CategoryItem";

type Props = {
  data: any;
};

const ListCategory = ({ data }: Props) => {
  return (
    <Container>
      <Title>
        <h1>{data.title}</h1>
        <Link to="/">Xem tất cả</Link>
      </Title>
      <Content>
        {data.data.map((item: any) => (
          <CateogryItem data={item} key={item.id} />
        ))}
      </Content>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 20px;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 10px;
  max-width: 1200px;
  margin: 0 auto;
`;

export default ListCategory;
