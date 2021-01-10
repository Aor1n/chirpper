import { Input } from '../inputs';

export const EmailInput = () => {
  return (
    <Input 
      inputContainerClass="form-group"
      inputClass="form-control form-control-lg"
      inputType="email"
      inputPlaceholder="Email"
    />
  );
};