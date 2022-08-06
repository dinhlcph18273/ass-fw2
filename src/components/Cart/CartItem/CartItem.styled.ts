import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #acacac2e;
  gap: 10px;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Name = styled.div``;

export const Price = styled.div`
  font-weight: bold;
  font-size: 16px;
  color: red;
`;

export const PricePercent = styled.div`
  background: #D70018;
	padding: 5px;
	font-size: 12px;
	color: #fff;
	font-weight: normal;
	border-radius: 4px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
`;

export const Img = styled.div`
  width: 100px;
`;

export const Quantity = styled.div`
  display: flex;
  gap: 5px;
`;

export const GroupQuantity = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Btn = styled.button`
  width: 25px;
  height: 25px;
  background: #fff;
  border: 1px solid #acacca;
  font-weight: bold;
`;

export const InputQuantity = styled.div`
  height: 25px;
  width: 40px;
  border: 1px solid #acacac;
  padding: 0 5px;
  border-right: none;
  border-left: none;
  text-align: center;
`;

export const ItemPriceSaleOrigin = styled.div`
  color: #707070;
  font-size: 14px;
  font-weight: 400;
`;

export const Main = styled.div`
  width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`

export const Sale = styled.div`
  padding: 10px;
	background: #F6F6F6;
	border-radius: 10px;
`;