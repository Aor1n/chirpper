export const Button = ({buttonClass, buttonType, disabled, buttonName}) => {
  return (
    <button 
      className={buttonClass}
      type={buttonType}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};