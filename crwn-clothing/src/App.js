import Home from "./Components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/routes/Navegation/navegation.component";
import Authentication from "./Components/routes/authentication/authentication.component";
import Shop from "./Components/routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />

        <Route path="shop" element={<Shop />} />

        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
