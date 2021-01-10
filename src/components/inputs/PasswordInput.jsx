import { Input } from '.';

export const PasswordInput = () => {
  return (
    <Input 
      inputContainerClass="form-group"
      inputClass="form-control form-control-lg"
      inputType="password"
      inputPlaceholder="Password"
    />
  );
};