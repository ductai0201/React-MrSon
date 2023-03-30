import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = (props) => {
  console.log(props);

  const { id } = useParams();
  console.log(id);

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.product.find((pro) => pro.id == id));
  });

  return (
    <div>
      <h1>ProductDetail</h1>
      <h3>{product?.name}</h3>
    </div>
  );
};

export default ProductDetail;
