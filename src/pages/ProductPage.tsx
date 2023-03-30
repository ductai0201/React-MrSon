
const ProductPage = (props) => {
 console.log(props);
 
  const removeProduct = (id)=>{
     props.onRemove(id)
  }
  
  return (
    <div>
      {props.products.map((item) => {
        return (
          <div key={item.id}>
            {item.name}
            <button onClick={()=> removeProduct(item.id)}>Remove</button>
          </div>
        )
      })}
    </div>
  );
};

export default ProductPage;
