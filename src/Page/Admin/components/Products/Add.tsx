import { useEffect, useState } from "react";

import addIcon from "../../../../assets/images/addIcon.svg";
import * as S from "./Add.styled";
import {
  Typography,
  Col,
  Row,
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Spin,
  Modal,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  editProduct,
  readProduct,
} from "../../../../api/product";
import axios from "axios";
import TextEditor from "../../../../components/TextEditor";

const { TextArea } = Input;
const { Option } = Select;

const AddProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState<any>([]);
  const [product, setProduct] = useState<any>({});
  const [disable, setDisable] = useState<boolean>(true);

  const handleChangeImage = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2097152) {
        return message.error("File không được quá 2KB");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          return uploadImage(reader.result as string);
        };
      }
    }
  };

  const uploadImage = async (base64Image: string) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://image-uploader-anhhtus.herokuapp.com/api/upload",
        { data: base64Image }
      );
      setIsLoading(false);
      setImageUrl(data.url);
    } catch (error: any) {
      message.error(JSON.stringify(error.message));
    }
  };
  const onFinish = async (values: any) => {
    if (!imageUrl) return message.error("Ảnh không được trống");
    Modal.confirm({
      content: "Bạn có chắc muốn submit",
      onOk: async () => {
        if (id) {
          if ((!imageUrl && isLoading) || isLoading) {
            message.error("Chờ ảnh!");
          } else {
            await editProduct({ ...values, images: imageUrl, id: product.id });
            message.success("Cập nhật thành công");

            navigate("/admin");
          }
        } else {
          if (imageUrl && !isLoading) {
            await createProduct({ ...values, images: imageUrl });

            message.success("Thêm thành công");

            navigate("/admin/products");
          } else {
            message.error("Chờ ảnh");
          }
        }
      },
    });
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3001/categories");
      setCategory(data);
    })();

    if (id) {
      (async () => {
        const { data } = await readProduct(id);
        setProduct(data);
        form.setFieldsValue(data);
      })();
    }
  }, []);

  return (
    <>
      <S.Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          {id ? "Cập nhật" : "Thêm mới"}
        </Typography.Title>
      </S.Breadcrumb>
      <Form
        onFinish={onFinish}
        autoComplete="off"
        labelCol={{ span: 24 }}
        form={form}
        layout="vertical"
      >
        <Row gutter={16}>
          <Col span={10}>
            <S.Upload>
              <Form.Item name="images">
                <S.UploadBtn>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleChangeImage}
                    accept="image/jpg,image/png,image/jpg"
                    defaultValue={imageUrl}
                  />
                  {product.images || imageUrl || isLoading ? (
                    <S.ImgPre src={imageUrl || product.images} alt="" />
                  ) : (
                    <>
                      <img src={addIcon} alt="" />
                      <span>Thêm ảnh</span>
                    </>
                  )}
                  {isLoading && <Spin size="large" />}
                </S.UploadBtn>
              </Form.Item>
            </S.Upload> 
            <Form.Item
                name="description"
                label="Mô tả"
                rules={[
                  {
                    validator(_, value) {
                      if (
                        !value ||
                        value == "<p><br></p>" ||
                        value == "<h1><br></h1>" ||
                        value == "<h2><br></h2>"
                      ) {
                        return Promise.reject(
                          "Trường này không được để trống!"
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <TextEditor onChange={() => setDisable(false)} />
              </Form.Item>
          </Col>
          <Col span={14}>
            <Typography.Title level={4}>Thông tin sản phẩm</Typography.Title>
            <Form.Item
              name="name"
              labelCol={{ span: 24 }}
              label="Tên sản phẩm"
              rules={[
                { required: true, message: "Tên sản phẩm không được trống" },
              ]}
            >
              <Input size="large" />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="originalPrice"
                  label="Giá gốc"
                  labelCol={{ span: 24 }}
                  rules={[
                    { required: true, message: "Vui lòng nhập sản phẩm" },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="saleOffPrice"
                  label="Giá giảm"
                  labelCol={{ span: 24 }}
                  rules={[
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        const price = getFieldValue("originalPrice")
                        return price && value < price 
                        ? Promise.resolve()
                        : Promise.reject("Giá sale phải nhỏ hơn giá gốc!")
                      },
                    }),
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Phân loại"
                  name="categories"
                  rules={[
                    { required: true, message: "Vui lòng chon loại sản phẩm" },
                  ]}
                >
                  <Select style={{ width: "100%" }} size="large">
                    {category.map((item: any) => (
                      <Option key={item.id} value={item.id}>
                        {item.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
                name="feature"
                label="Tính năng sản phẩm"
                rules={[
                  {
                    validator(_, value) {
                      if (
                        !value ||
                        value == "<p><br></p>" ||
                        value == "<h1><br></h1>" ||
                        value == "<h2><br></h2>"
                      ) {
                        return Promise.reject(
                          "Trường này không được để trống!"
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <TextEditor onChange={() => setDisable(false)} />
              </Form.Item>

              <Form.Item
                name="especial"
                label="Đặc điểm nổi bật "
                rules={[
                  {
                    validator(_, value) {
                      if (
                        !value ||
                        value == "<p><br></p>" ||
                        value == "<h1><br></h1>" ||
                        value == "<h2><br></h2>"
                      ) {
                        return Promise.reject(
                          "Trường này không được để trống!"
                        );
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <TextEditor onChange={() => setDisable(false)} />
              </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {id ? "Cập nhật sản phẩm" : "Tạo mới sản phẩm"}
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default AddProductPage;
