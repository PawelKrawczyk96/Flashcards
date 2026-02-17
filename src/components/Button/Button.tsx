import { IButton } from "@interfaces/componentInterfaces";
import "./styles.css";
import { Icon } from "@mui/material";

export const Button = ({ onClick, children, variant, icon }: IButton) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {icon && <Icon className="btn--icon" />}
      {children}
    </button>
  );
};
