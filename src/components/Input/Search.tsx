import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React from "react";
import styled from "styled-components";
type Props = {
  onchange?: (key: string) => void;
};

const InputSearch = (props: Props) => {
  const debounce = (func: (e: any) => void, wait = 500) => {
    let h: any;
    return (e: any) => {
      clearTimeout(h);
      h = setTimeout(() => func(e), wait);
    };
  };
  const handleChange = (e: any) => {
    props.onchange?.(e.target.value);
  };

  return (
    <InputSearch1
      onChange={debounce((e) => handleChange(e))}
      placeholder="input search text"
      prefix={<SearchOutlined />}
    />
  );
};

const InputSearch1 = styled(Input)`
  border-radius: 6px !important;
  overflow: hidden;
  gap: 5px;

  svg {
    font-size: 16px;
    font-weight: bold;
    transform: scale(1.2);
  }
`;

export default InputSearch;
