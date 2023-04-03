import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { addProduct, updateProduct } from "./api/product";
import "./App.css";
import AddProductPage from "./pages/admin/AddProduct";
import DashBoard from "./pages/admin/DashBoard";
import ProductManagement from "./pages/admin/ProductManagement";
import UpdateProduct from "./pages/admin/UpdateProduct";
import HomePage from "./pages/HomePage";
import AdminLayout from "./pages/layouts/AdminLayout";
import WebsiteLayout from "./pages/layouts/WebsiteLayout";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
function App() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((Response) => Response.json())
      .then((data) => setProduct(data));
  }, []);

  const onHandleRemove = (id) => {
    fetch("http://localhost:3000/products/" + id, {
      method: "DELETE",
    }).then(() => setProduct(products.filter((product) => product.id != id)));
  };

  const onHandleAdd = (product) => {
    addProduct(product);
  };

  // OnHandleAll:
  // b1: Tạo một hàm onHandleAdd có tham số product và gọi đến addProduct trong api/product.tsx để xử lí add vào database
  // b2: Khởi tạo một property onAdd như một tham số và truyền onHandleAdd vào onAdd
  // b3: Component AddProduct.tsx sẽ nhận một props đó là onAdd
  // b4: Khi props gọi đến onAdd hàm onHandleAdd sẽ được chạy và có giá trị để add vào database
  /* Để thêm một sản phẩm vào cơ sở dữ liệu, trước tiên cần tạo một hàm onHandleAdd, nhận tham số là sản phẩm cần thêm và gọi đến hàm addProduct trong api/product.tsx để xử lý thêm vào cơ sở dữ liệu. Hàm onHandleAdd này sẽ được truyền vào một tham số là onAdd. 

Tại component AddProduct.tsx, ta cần khai báo một props là onAdd, truyền vào đó hàm onHandleAdd. Khi props onAdd được gọi, hàm onHandleAdd sẽ được kích hoạt và sản phẩm sẽ được thêm vào cơ sở dữ liệu.   */
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() =>
      setProduct(
        products.map((item) => (item.id == product.id ? product : item))
      )
    );
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/products">
            <Route
              index
              element={
                <ProductPage products={products} onRemove={onHandleRemove} />
              }
            />
            <Route path=":id" element={<ProductDetail product={products} />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashBoard />} />
          <Route path="products">
            <Route index element={<ProductManagement products={products} />} />
            <Route
              path="add"
              element={<AddProductPage onAdd={onHandleAdd} />}
            />
            <Route
              path=":id/update"
              element={
                <UpdateProduct products={products} onUpdate={onHandleUpdate} />
              }
            />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
