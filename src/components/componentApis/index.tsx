import { AccordionPanel } from "@chakra-ui/react";
import { isEmpty, uniqueId } from "lodash";

import { FeaturesInterface } from "../../types";
import { CustomAccordion, Empty } from "..";
import { HoverLink } from "./hoverLink";

export const Apis: React.FC<FeaturesInterface> = (props) => {
  const { displayName, data } = props;

  return (
    <CustomAccordion.AccordionItem content={displayName}>
      <AccordionPanel pb={4} display="flex" flexDirection="column" py="0">
        {isEmpty(data) && <Empty>Is Empty</Empty>}
        {!isEmpty(data) &&
          data.map(({ displayName }) => (
            <HoverLink
              key={`${displayName}+${uniqueId()}`}
              displayName={displayName}
            />
          ))}
      </AccordionPanel>
    </CustomAccordion.AccordionItem>
  );
};
