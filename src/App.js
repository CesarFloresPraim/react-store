import "./App.css";
import Home from './views/Home/Home'
import Auth from "./views/Auth/Auth";
import ProductDetail from "./views/ProductDetail/ProductDetail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
