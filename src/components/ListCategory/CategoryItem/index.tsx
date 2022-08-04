import React from "react";
import styled from "styled-components";

type Props = {
    data:any
};

const CateogryItem = ({data}: Props) => {
  return (
    <CateItem style={{ background: data.color }}>
      <CateItemTitle>
        <span>{data.name}</span>
      </CateItemTitle>
      <CateItemImg>
        <img src={data.img} alt="" />
      </CateItemImg>
    </CateItem>
  );
};

const CateItemImg = styled.div`
  width: 100%;
  margin-top: auto;
  text-align:center ;
`;

const CateItem = styled.div`
  width: calc((100% - 90px) / 10);
  background-color: red;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
`;

const CateItemTitle = styled.div`
  width: 100%;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  padding: 5px;
`;

export default CateogryItem;
