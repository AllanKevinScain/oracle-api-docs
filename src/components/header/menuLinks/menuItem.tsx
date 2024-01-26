import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HeaderMenuItemInterface } from "../../../types";

export const MenuItem: React.FC<HeaderMenuItemInterface> = (props) => {
  const { children, to } = props;
  return (
    <Link to={to}>
      <Text display="block">{children}</Text>
    </Link>
  );
};
