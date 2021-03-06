import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue } from "@chakra-ui/react";
import { memo } from "react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { SidebarNav } from "./SidebarNav";

const dataMenu = [
  {
    id: 1,
    label: 'Geral',
    menus: [
      {
        id: 1,
        icon: RiDashboardLine,
        name: 'Dashboard',
        href: '/dashboard'
      },
      {
        id: 2,
        icon: RiContactsLine,
        name: 'Usuários',
        href: '/users'
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
        name: 'Formulários',
        href: '/forms'
      },
      {
        id: 2,
        icon: RiGitMergeLine,
        name: 'Automação',
        href: '/automation'
      }
    ]
  }
];

const SidebarComponent = () => {
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false
  });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p={4}>
            <DrawerCloseButton mt={6} />
            <DrawerHeader>Navegação</DrawerHeader>

            <DrawerBody>
              <SidebarNav dataMenu={dataMenu} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w={64} mr={8}>
      <SidebarNav dataMenu={dataMenu} />
    </Box>
  );
};

export const Sidebar = memo(SidebarComponent);
