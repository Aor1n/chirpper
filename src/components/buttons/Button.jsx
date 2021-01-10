export const Button = ({buttonClass, buttonType, buttonName}) => {
  return (
    <button 
      className={buttonClass}
      type={buttonType}
    >
      {buttonName}
    </button>
  );
};