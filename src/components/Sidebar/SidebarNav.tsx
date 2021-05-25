import { Stack } from "@chakra-ui/react";
import { ElementType } from "react";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

type menus = {
  id: number;
  icon: ElementType;
  name: string;
};

type dataMenu = {
  id: number;
  label: string;
  menus: menus[];
};

interface SidebarProps {
  dataMenu: dataMenu[];
};

const SidebarNav = ({ dataMenu }: SidebarProps) => {
  return (
    <Stack spacing={12} align="flex-start">
      {dataMenu.map(section => (
        <NavSection title={section.label} key={section.id}>
          {section.menus.map(menu => (
            <NavLink icon={menu.icon} key={menu.id}>{menu.name}</NavLink>
          ))}
        </NavSection>
      ))}
    </Stack>
  );
};

export default SidebarNav;
