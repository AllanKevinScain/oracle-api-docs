import { Flex } from "@chakra-ui/react";
import { SimulatedBrowserNavigation } from "./simulatedBrowseNavigation";
import { SomeChildrenInterface } from "../../types";

export const NavBarContainer: React.FC<SomeChildrenInterface> = (props) => {
  const { children } = props;
  return (
    <Flex as="nav" w="100vw" h="70px" align="end" bg="black">
      <Flex
        w="100%"
        h="90%"
        bgGradient="linear(to-b, rgba(23,22,36,1), rgba(35,33,53,1))"
        borderTopRadius="lg"
        align="start"
        justify="space-between"
        px="3"
        py="2.5"
      >
        <SimulatedBrowserNavigation />
        {children}
      </Flex>
    </Flex>
  );
};
