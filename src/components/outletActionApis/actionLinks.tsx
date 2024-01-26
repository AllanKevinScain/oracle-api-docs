import { AccordionPanel } from "@chakra-ui/react";
import { DataOfCaracteristicFeatureInterface } from "../../types";
import { uniqueId } from "lodash";
import { Request } from "./request";
import { CustomAccordion } from "..";
import { ExampleSession } from "./exampleSession";

export const ActionLinks: React.FC<DataOfCaracteristicFeatureInterface> = (
  props
) => {
  const { displayName, example, requestParameters = [] } = props;

  return (
    <CustomAccordion.AccordionItem content={displayName}>
      <AccordionPanel
        pb={4}
        display="flex"
        flexDirection="column"
        padding="10"
        gap="2"
      >
        {requestParameters.map((item) => {
          return <Request key={`${item.id}+${uniqueId()}`} {...item} />;
        })}

        <ExampleSession example={example} />
      </AccordionPanel>
    </CustomAccordion.AccordionItem>
  );
};
