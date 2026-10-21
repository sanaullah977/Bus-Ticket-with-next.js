const Button = ({
  className = "",
  title = "click",
  icon = null,
  children,
  type = "button",
  ...props
}) => {
  return (
    <button type={type} className={className} {...props}>
      {icon}
      {children || title}
    </button>
  );
};

export default Button;
