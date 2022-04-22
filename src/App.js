import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home/Home'
import Auth from "./views/Auth/Auth";
import ProductDetail from "./views/ProductDetail/ProductDetail";
import Cart from "./views/Cart/Cart";
import Thanks from "./views/Thanks/Thanks";
import Rejected from "./views/Rejected/Rejected";
import NotFound from "./views/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/auth" element={<Auth />}></Route>
        <Route exact path="/product/:id" element={<ProductDetail />}></Route>
        <Route exact path="/cart" element={<Cart />}></Route>
        <Route exact path="/thanks" element={<Thanks />}></Route>
        <Route exact path="/rejected" element={<Rejected />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
