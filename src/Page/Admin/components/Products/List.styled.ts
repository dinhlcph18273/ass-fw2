import { Button, Select } from "antd";
import styled from "styled-components";

export const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const CustomPlus = styled(Button)`
  width: 35px;
  height: 35px;
  border-radius: 10px;
  border: 4px solid #00b0d7;
  color: #00b0d7;
  margin-right: 100px;
`;

export const Buttoncustom = styled(Button)`
  border: none;
  background: none;
  cursor: pointer;
  font-size: 25px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 30px;
`;

export const FilterName = styled.div`
  font-size: 15px;
  color: #5f5e61;
  line-height: 19.5px;
  font-weight: 600;
`;

export const FilterMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FilterMainSpan = styled.div`
  color: #5a6169;
  font-size: 14px;
  font-weight: 400;
`;

export const FilterSelect = styled(Select)`
  width: 300px;
`;
