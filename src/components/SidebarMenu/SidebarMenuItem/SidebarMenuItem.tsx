import { ISidebarMenuItem } from "@interfaces/componentInterfaces";
import { CSSProperties } from "react";
import { Link } from "react-router";
import "./style.css";

export const SidebarMenuItem = ({ icon, name, path }: ISidebarMenuItem) => {
  return (
    <li className="sidebarMenu--item">
      <Link to={path} className="sidebarMenu--item__link">
        <span
          className="sidebarMenu--item__icon"
          style={{ "--icon-fill": "grey" } as CSSProperties}
        >
          {icon}
        </span>
        <p className="sidebarMenu--item__name">{name}</p>
      </Link>
    </li>
  );
};
