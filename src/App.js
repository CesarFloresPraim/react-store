import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home'
import Auth from "./views/Auth/Auth";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Cart from "./views/Cart/Cart";
import Thanks from "./views/Thanks/Thanks";
import Rejected from "./views/Rejected/Rejected";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/thanks" element={<Thanks />}></Route>
        <Route path="/rejected" element={<Rejected />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
