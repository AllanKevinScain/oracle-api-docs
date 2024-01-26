import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const MenuItem = ({ children, isLast = false, to = "/" }) => {
  return (
    <Link to={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};
