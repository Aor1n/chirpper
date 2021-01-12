export const PasswordInput = ({
  inputContainerClass,
  inputClass,
  inputType,
  inputPlaceholder,
  inputValue,
  onChange,
}) => {
  

  return (
    <div className={inputContainerClass}>
      <input 
        className={inputClass}
        type={inputType}
        placeholder={inputPlaceholder}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};