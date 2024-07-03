import { Fragment } from "react";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";
import "./navegation.style.scss";
import { UserContext } from "../../../context/user.context";
import { useContext } from "react";
const NavBar = () => {
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          {" "}
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span onClick={signOutHandler} className="nac-link">
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      {/* to display the code in the children routes */}
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
