import { Route, Routes } from "react-router-dom";

// import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

//import component
import HomePageComponent from "./components/B.O/HomePage/HomePageComponent";
import ShopComponent from "./components/B.O/Shop/ShopComponent";
import BlogComponent from "./components/B.O/Blog/BlogComponent";
import SingleBlog from "./components/B.O/SingleBlog/SingleBlogComponent";
import RegularPage from "./components/B.O/RegularPage/RegularPageComponent";
import Login from "./components/B.O/Login/LoginComponent";
import ProductDetailsComponent from "./components/B.O/ProductDetails/ProductDetailsComponent";
import CheckoutComponent from "./components/B.O/Checkout/CheckoutComponent";
import CartComponent from "./components/B.O/Cart/CartComponent";
import ContactComponent from "./components/B.O/Contact/ContactComponent";


function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<HomePageComponent />}></Route>
          <Route exact path="/:productId" element={<ProductDetailsComponent />}></Route>
          <Route exact path="/shop" element={<ShopComponent />}></Route>
          <Route exact path="/shop/:productId" element={<ProductDetailsComponent />}></Route>
          <Route exact path="/blog" element={<BlogComponent />}></Route>
          <Route exact path="/singleblog" element={<SingleBlog />}></Route>
          <Route exact path="/regularpage" element={<RegularPage />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/productdetails" element={<ProductDetailsComponent />}></Route>
          <Route exact path="/cart" element={<CartComponent />}></Route>
          <Route exact path="/checkout" element={<CheckoutComponent />}></Route>
          <Route exact path="/contact" element={<ContactComponent />}></Route>
          <Route path="*" name="Home" element={<HomePageComponent />}></Route>
      </Routes>
    </div>
  );
}

export default App;
