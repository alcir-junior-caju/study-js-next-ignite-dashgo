import { memo, ReactNode } from "react";
import { useCan } from "../../hooks/useCan";

interface CanProps {
  children: ReactNode;
  permissions?: string[];
  roles?: string[];
};

const CanComponent = ({ children, permissions, roles }: CanProps) => {
  const userCanSeeComponent = useCan({ permissions, roles });

  if (!userCanSeeComponent) return null;

  return (
    <>
      {children}
    </>
  );
};

export const Can = memo(CanComponent);
