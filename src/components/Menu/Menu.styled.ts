import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
`;
export const Wrapper = styled.div`
  background-color: #d70018;
  padding: 5px 0;
`;
export const Logo = styled.img`
  width: 60px;
  height: auto;
  margin-right: 60px;
`;

export const Search = styled.input`
  height: 36px;
  border-radius: 10px;
  border: none;
  min-width: 500px;
`;
export const Services = styled.div`
  display: flex;
  margin-left: 48px;
`;

export const Service = styled.div`
  display: flex;
`;

export const ProductSearch = styled.div`
  position: absolute;
  content: "";
  width: 500px;
  z-index: 99;
  top: 90%;
  margin-left: 125px;
`;
