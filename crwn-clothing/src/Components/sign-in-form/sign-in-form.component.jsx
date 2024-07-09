import FormInput from "../form-input/form-input.component";
import { useState } from "react";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";

import { signInEmailPassword } from "../../utils/firebase/firebase.utils";

import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import { SingInContainer, ButtonsContainer } from "./sign-in-form.style";

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
      await signInWithGooglePopup();
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
      await signInEmailPassword(email, password);

      resetFormFields();
    } catch (error) {
      alert(error.code, error.message);
    }
  };
  return (
    <SingInContainer>
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
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPES_CLASSES.google}
            onClick={logGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SingInContainer>
  );
};
export default SingInForm;
