import styled from "styled-components";

export const ContainerItem = styled.div`
  width: calc((100% - 150px) / 6);
  display: flex;
  flex-wrap: wrap;
`;

export const ItemImage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ItemTitle = styled.div`
  a {
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #444444;
    padding: 10px 0;
  }
`;
export const ItemPrice = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px 0;
  gap: 20px;
`;

export const ItemPriceOrigin = styled.div`
  color: #d70018;
  font-size: 16px;
  font-weight: 400;
`;

export const ItemPriceSaleOrigin = styled.div`
  color: #707070;
  font-size: 14px;
  font-weight: 400;
`;

export const ItemContentSale = styled.div`
  color: #444444;
  background: #e5e7eb;
  padding: 10px;
  border-radius: 5px;
`;
export const ItemRate = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: baseline;
`;
