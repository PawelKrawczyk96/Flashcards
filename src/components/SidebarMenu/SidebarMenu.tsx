import "./style.css";
import { CardIcon } from "@components/Cards";
import { menuItems } from "@consts/const";
import { ReactComponent as BrainIcon } from "icons/brain.svg";
import { SidebarMenuItem } from "@components/SidebarMenu/SidebarMenuItem";
import { IMenuItems } from "@interfaces/componentInterfaces";

export const SidebarMenu = () => {
  return (
    <div className="sidebarMenu">
      <div className="sidebarMenu--header">
        <CardIcon
          icon={<BrainIcon />}
          iconColor="white"
          backgroundColor={"purple"}
          backgroundOpacity={1}
        />
        <h1 className="sidebarMenu--header__title">FlashMaster</h1>
      </div>
      <ul className="sidebarMenu--menu">
        {menuItems.map(({ icon: Icon, name, path }: IMenuItems) => {
          return <SidebarMenuItem icon={<Icon />} name={name} path={path} />;
        })}
      </ul>
    </div>
  );
};
