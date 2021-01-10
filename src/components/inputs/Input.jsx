export const Input = ({
  inputContainerClass,
  inputClass,
  inputType,
  inputPlaceholder}) => {

  return (
    <div className={inputContainerClass}>
      <input 
        className={inputClass}
        type={inputType}
        placeholder={inputPlaceholder}
      />
    </div>
  );
};