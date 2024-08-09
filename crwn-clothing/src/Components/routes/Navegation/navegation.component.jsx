import { Fragment } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinkContainer,
  NavLink,
} from "./navegation.style";

import { useContext } from "react";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../../context/cart.context";

//redux
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../store/user/user.selector";
const NavBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler} className="nav-link">
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isCartOpen ? <CartDropdown /> : null}
      </NavigationContainer>

      {/* to display the code in the children routes */}
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
