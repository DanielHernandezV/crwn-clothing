import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button from "../button/button.component";
import { signInEmailPassword } from "../../utils/firebase/firebase.utils";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};
const SingInForm = () => {
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const logGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    } catch (error) {
      alert(error);
    }
  };

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();

    try {
      const userCrd = await signInEmailPassword(email, password);

      resetFormFields();
    } catch (error) {
      alert(error.code, error.message);
    }
  };
  return (
    <div className="sign-in-container">
      <h2>I already have an account </h2>
      <span>SignIn With your email and password</span>
      <form onSubmit={handlerSubmit}>
        <FormInput
          label="email"
          required
          type="text"
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="buttons-containers">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={logGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SingInForm;
