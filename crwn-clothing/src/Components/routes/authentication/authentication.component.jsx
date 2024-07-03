import SingUpForm from "../../sign-up-form/sign-up.component";
import SingInForm from "../../sign-in-form/sign-in-form.component";
import "./authentication.style.scss";
const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};
export default Authentication;
