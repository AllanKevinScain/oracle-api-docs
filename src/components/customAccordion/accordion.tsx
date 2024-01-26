import { Accordion as OriginalComponent } from "@chakra-ui/react";
import { SomeChildrenInterface } from "../../types";

export const Accordion: React.FC<SomeChildrenInterface> = ({ children }) => {
  return (
    <OriginalComponent allowMultiple bg="transparent" w="full" border="none">
      {children}
    </OriginalComponent>
  );
};
