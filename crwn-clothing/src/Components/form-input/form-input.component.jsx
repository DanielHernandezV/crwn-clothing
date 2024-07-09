import { GroupContainer, FromImput, FormImputLabel } from "./form-input.style";

const FormInput = ({ label, ...otherprops }) => {
  return (
    <GroupContainer>
      <FromImput {...otherprops}></FromImput>
      {label && (
        <FormImputLabel shrink={otherprops.value.length}>
          {label}
        </FormImputLabel>
      )}
    </GroupContainer>
  );
};
export default FormInput;
