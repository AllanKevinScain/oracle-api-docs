import { Heading, Flex } from "@chakra-ui/react";
import { Outlet, useParams } from "react-router-dom";

export const Actions = () => {
  const { actionType } = useParams();

  return (
    <Flex flexDir="column" gap="10" position="relative" w="100vw">
      <Heading textAlign="center" fontFamily="Inter" fontWeight="300">
        {actionType}.archive
      </Heading>

      <Outlet />
    </Flex>
  );
};
