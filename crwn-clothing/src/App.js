import Home from "./Components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/routes/Navegation/navegation.component";
import SignIn from "./Components/routes/sign-in/sign-in.component";
const App = () => {
  const Shop = () => {
    return <h1>This is the shop</h1>;
  };
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
