import { Flex } from "@chakra-ui/react";
import { uniqueId } from "lodash";

import { featuresAPI } from "../../constants";
import { Apis, CustomAccordion } from "../../components";

export const Home = () => {
  return (
    <Flex w="100vw">
      <CustomAccordion.Accordion>
        {featuresAPI.map((item) => (
          <Apis
            key={`${item.displayName}+${uniqueId()}`}
            displayName={item.displayName}
            data={item.data}
          />
        ))}
      </CustomAccordion.Accordion>
    </Flex>
  );
};
