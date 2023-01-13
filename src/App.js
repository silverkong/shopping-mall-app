import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// 화면, 컴포넌트
import Nav from "./component/Nav";
import Login from "./pages/Login";
import ProductAll from "./pages/ProductAll";
import ProductDetail from "./pages/ProductDetail";
// CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // 로그인 판별 : true - 로그인 O, false - 로그인 X
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
