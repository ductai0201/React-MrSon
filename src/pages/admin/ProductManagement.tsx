import React from "react";
import { Space, Table, Tag,Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Link } from "react-router-dom";
const ProductManagement = (props) => {
  console.log(props);

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
          <Button type="primary">Remove</Button>
        </Space>
      ),
    },
  ];

  const data = props.products.map((item) => {
    return {
      key: item.id,
      name: item.name,
      price: item.price,
    };
  });

  return <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />;
};

export default ProductManagement;
