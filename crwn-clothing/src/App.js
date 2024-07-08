import Home from "./Components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/routes/Navegation/navegation.component";
import Authentication from "./Components/routes/authentication/authentication.component";
import Shop from "./Components/routes/shop/shop.component";
import CheckOut from "./Components/routes/check-out/check-out.component";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="check-out" element={<CheckOut />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
