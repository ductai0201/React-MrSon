import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from 'antd';
// const AddProductPage = (props) => {
//   console.log(props);

//   const navigate = useNavigate();
//   const [inputValue, setInputValue] = useState({});
//   const onHandleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setInputValue({ ...inputValue, [name]: value });
//   };

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputValue);
//     props.onAdd(inputValue);
//   };

//   return (
//     <div>
//       <form action="" onSubmit={onHandleSubmit}>
//         <input
//           type="text"
//           placeholder="Product name"
//           onChange={onHandleChange}
//           name="name"
//         />
//         <input type="number" name="price" onChange={onHandleChange} />
//         <button type="submit">Add new product</button>
//       </form>
//     </div>
//   );
// };
interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface Iprop {
  onAdd: (product: IProduct) => void;
}


const AddProductPage = (props: Iprop) => {
  console.log(props);
  
  // console.log(props);
  // const { register, handleSubmit } = useForm();
  // const onHandleSubmit = (data) => {
  //   props.onAdd(data);
  // };

  const onFinish = (values: any) => {
    props.onAdd(values)
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      {/* <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="Product name" />
        <input type="number" {...register("price")} />
        <button type="submit">Add new product</button>
      </form> */}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 1000 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProductPage;
