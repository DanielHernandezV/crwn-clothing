import SingUpForm from "../../sign-up-form/sign-up.component";

import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Sign Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Popup</button>
      <SingUpForm />
    </div>
  );
};
export default SignIn;
