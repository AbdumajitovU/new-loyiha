import Homepage from "./pages/Home";
import AboutPage from "./pages/About";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Login from "./pages/components/Layout/register";
import StadiumDetail from "./pages/StadiumDetail"
import StadiumCreate from "./pages/StadiumCreate"
import StadiumUpdate from "./pages/StadiumUpdate";
import CartPage from "./pages/Cart";
import ProductProvider from "./utils/productContext";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <ProductProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/register" element={<Login/>} />
        <Route path="/stadium/:banana" element={<StadiumDetail />} />
        <Route path="/stadium/create" element={<StadiumCreate />} />
        <Route path="/stadium/update/:banana" element={<StadiumUpdate />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
    </ProductProvider>
    );
}

export default App;
