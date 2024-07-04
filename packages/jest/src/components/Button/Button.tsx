import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "m" | "l";
  color?: "outlined" | "blue";
  className?: string;
  hasIcon?: boolean;
}

const Button = ({
  size = "l",
  color = "outlined",
  className = "",
  hasIcon = false,
  ...props
}: ButtonProps) => {
  const commonStyles = `
    ${styles.button}
    ${styles[size]}
    ${styles[color]}
    ${hasIcon ? styles.hasIcon : ""}
    ${className}
  `;

  return (
    <button className={commonStyles} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
