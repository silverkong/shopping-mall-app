import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./component/Nav";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
