import {
  AccordionButton,
  AccordionIcon,
  Heading,
  AccordionItem as OriginalComponent,
} from "@chakra-ui/react";
import { CustomAccordionItemInterface } from "../../types";
import { capitalize } from "lodash";

export const AccordionItem: React.FC<CustomAccordionItemInterface> = ({
  children,
  content,
}) => {
  return (
    <OriginalComponent borderColor="#232135">
      <h2>
        <AccordionButton gap="2" _hover={{ color: "#e0def2", bg: "#2A273F" }}>
          <AccordionIcon />
          <Heading textAlign="left" fontSize="lg">
            {capitalize(content)}
          </Heading>
        </AccordionButton>
      </h2>
      {children}
    </OriginalComponent>
  );
};
