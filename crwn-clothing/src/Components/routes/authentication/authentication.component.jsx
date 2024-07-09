import SingUpForm from "../../sign-up-form/sign-up.component";
import SingInForm from "../../sign-in-form/sign-in-form.component";
import { AuthenticationContainer } from "./authentication.style";
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SingInForm />
      <SingUpForm />
    </AuthenticationContainer>
  );
};
export default Authentication;
