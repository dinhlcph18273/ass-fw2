import { useEffect, useState } from "react";
import { Typography, Button, Table, Row, Switch, message, Select } from "antd";
import { Link } from "react-router-dom";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { changeStatus, getAllProduct } from "../../../../api/product";
import { AiOutlineEdit } from "react-icons/ai";

import * as S from "./List.styled";
import axios from "axios";

interface DataType {
  name: string;
  saleOffPrice: number;
  feature: string;
  description: string;
}

const { Option } = Select;

const ListProduct = () => {
  const [product, setProduct] = useState([]);
  const [phoneFilter, setPhoneFilter] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await getAllProduct();
      setProduct(data);
      setPhoneFilter(data);
      setIsLoading(false);
    } catch (error) {
      console.log(message.error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:3001/categories`);
        setCategory(data);
      } catch (error) {
        console.log(message.error);
      }
    })();
    fetchData();
  }, []);

  const onGenderChange = (cateID: any) => {
    if (cateID) {
      const data = product.filter((item: any) => item.cateID === cateID);
      setPhoneFilter(data);
    } else {
      setPhoneFilter(product);
    }
  };

  const checkStatus = async (record: any) => {
    await changeStatus(record);
    message.success("Thay đổi trạng thái thành công!");
    fetchData();
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "#",
      dataIndex: "id",
      width: "5%",
      key: "id",
      align: "center",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      width: "20%",
      align: "center",
      render: (text) => (
        <Link to="" style={{ color: "black" }}>
          {text}
        </Link>
      ),
    },
    {
      title: "Thành tiền",
      key: "saleOffPrice",
      dataIndex: "saleOffPrice",
      width: "10%",
    },
    // {
    //   title: "Đặc điểm",
    //   dataIndex: "feature",
    //   key: "feature",
    //   align: "center",
    //   render: (text) => (
    //     <Link to="" style={{ color: "black" }}>
    //       {text}
    //     </Link>
    //   ),
    // },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
      align: "center",
    },
    {
      title: "Ẩn/hiện",
      dataIndex: "status",
      width: "20%",
      render: (_: boolean, record: any) => (
        <Switch checked={_} onChange={() => checkStatus(record)} />
      ),
      align: "center",
    },
    {
      title: "Thao tác",
      dataIndex: "id",
      width: "5%",
      key: "id",
      align: "center",
      render: (id: any) => (
        <Row>
          <Link className="edit-to" to={`/admin/products/${id}/edit`}>
            <S.Buttoncustom>
              <AiOutlineEdit />
            </S.Buttoncustom>
          </Link>
        </Row>
      ),
    },
  ];

  return (
    <>
      <S.Breadcrumb>
        <Typography.Title level={2} style={{ marginLeft: 30 }}>
          Điện thoại
        </Typography.Title>
        <Link to="/admin/products/add">
          <S.CustomPlus icon={<PlusOutlined />} />
        </Link>
      </S.Breadcrumb>
      <S.Filter>
        <S.FilterName>Bộ lọc</S.FilterName>
        <S.FilterMain>
          <S.FilterMainSpan>Danh mục sản phẩm</S.FilterMainSpan>
          <S.FilterSelect
            placeholder="Choose"
            onChange={onGenderChange}
            allowClear
            defaultValue={`Tất cả`}
          >
            <Option value="">Tất cả</Option>
            {category.map((item: any) => (
              <Option value={item.id} key={item.id}>
                {item.name}
              </Option>
            ))}
          </S.FilterSelect>
        </S.FilterMain>
      </S.Filter>
      <Table
        columns={columns}
        dataSource={phoneFilter}
        loading={isLoading}
        rowKey="id"
      />
    </>
  );
};

export default ListProduct;
