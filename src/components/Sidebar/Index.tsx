import { Box, Stack } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

const dataMenu = [
  {
    id: 1,
    label: 'Geral',
    menus: [
      {
        id: 1,
        icon: RiDashboardLine,
        name: 'Dashboard'
      },
      {
        id: 2,
        icon: RiContactsLine,
        name: 'Usuários'
      }
    ]
  },
  {
    id: 2,
    label: 'Automação',
    menus: [
      {
        id: 1,
        icon: RiInputMethodLine,
        name: 'Formulários'
      },
      {
        id: 2,
        icon: RiGitMergeLine,
        name: 'Automação'
      }
    ]
  }
];

const Sidebar = () => {
  return (
    <Box as="aside" w={64} mr={8}>
      <Stack spacing={12} align="flex-start">
        {dataMenu.map(section => (
          <NavSection title={section.label} key={section.id}>
            {section.menus.map(menu => (
              <NavLink icon={menu.icon} key={menu.id}>{menu.name}</NavLink>
            ))}
          </NavSection>
        ))}
      </Stack>
    </Box>
  );
};

export default Sidebar;
