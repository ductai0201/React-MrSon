import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

// const UpdateProduct = (props) => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});

//   useEffect(() => {
//     const product = props.products.find((item) => item.id == id);
//     setProduct(product);
//   });
//   console.log(product);

//   const [inputValue, setInputValue] = useState({});
//   const onHandleChange = (e) => {
//     const { name, value } = e.target;
//     setInputValue({ ...inputValue, [name]: value });
//   };
//   console.log(inputValue);

//   const onHandleSubmit = (e) => {
//     e.preventDefault();
//     const updateData = { ...product, ...inputValue };
//     props.onUpdate(updateData);
//   };

//   return (
//     <div>
//       <form action="" onSubmit={onHandleSubmit}>
//         <input
//           type="text"
//           defaultValue={product?.name}
//           onChange={onHandleChange}
//           name="name"
//         />
//         <input
//           type="number"
//           defaultValue={product?.price}
//           onChange={onHandleChange}
//           name="price"
//         />
//         <button type="submit">Update</button>
//       </form>
//     </div>
//   );
// };
const UpdateProduct = ({ onUpdate, products }) => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const currentProduct = products.find((item) => item.id == id);
    reset(currentProduct);
  }, [products]);

  const onHandleSubmit = (data) => {
    onUpdate(data);
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="text" {...register("name")} placeholder="name Product" />
        <input type="number" {...register("price")} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};
export default UpdateProduct;
