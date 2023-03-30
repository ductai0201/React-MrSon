import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProductPage = (props) => {
  console.log(props);
  
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({});
  const onHandleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    props.onAdd(inputValue);
  };

  return (
    <div>
      <form action="" onSubmit={onHandleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          onChange={onHandleChange}
          name="name"
        />
        <input type="number" name="price" onChange={onHandleChange} />
        <button type="submit">Add new product</button>
      </form>
    </div>
  );
};

export default AddProductPage;