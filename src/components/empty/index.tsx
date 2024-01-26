import { chakra } from "@chakra-ui/react";
import { SomeChildrenInterface } from "../../types";

export const Empty: React.FC<SomeChildrenInterface> = (props) => {
  const { children } = props;

  return (
    <chakra.span transition="all" px="6" py="2">
      {children}
    </chakra.span>
  );
};
