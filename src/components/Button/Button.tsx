import { IButton } from "@interfaces/componentInterfaces";
import "./styles.css";

export const Button = ({ onClick, children, variant, icon }: IButton) => {
  return (
    <button className={`btn btn--${variant}`} onClick={onClick}>
      {icon && <span className="btn--icon">{icon}</span>}
      {children}
    </button>
  );
};
