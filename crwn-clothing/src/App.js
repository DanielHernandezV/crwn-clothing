import Home from "./Components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/routes/Navegation/navegation.component";
import Authentication from "./Components/routes/authentication/authentication.component";
import Shop from "./Components/routes/shop/shop.component";
import CheckOut from "./Components/routes/check-out/check-out.component";
import { useEffect } from "react";
import {
  onAthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unSubcribe = onAthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });
    return unSubcribe;
  }, []);

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
