import { Stack } from "@chakra-ui/react";
import { ElementType, memo } from "react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

type menus = {
  id: number;
  icon: ElementType;
  name: string;
  href: string;
};

type dataMenu = {
  id: number;
  label: string;
  menus: menus[];
};

interface SidebarProps {
  dataMenu: dataMenu[];
};

const SidebarNavComponent = ({ dataMenu }: SidebarProps) => {
  return (
    <Stack spacing={12} align="flex-start">
      {dataMenu.map(section => (
        <NavSection title={section.label} key={section.id}>
          {section.menus.map(menu => (
            <NavLink href={menu.href} icon={menu.icon} key={menu.id}>{menu.name}</NavLink>
          ))}
        </NavSection>
      ))}
    </Stack>
  );
};

export const SidebarNav = memo(SidebarNavComponent);
