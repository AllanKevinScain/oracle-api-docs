import { Text, Stack, chakra, Box, Flex } from "@chakra-ui/react";

import { isEmpty, uniqueId } from "lodash";
import { RequestParametersInterface } from "../../types";
import { RestShowText } from "..";
import { IoIosReturnRight } from "react-icons/io";

export const Request: React.FC<RequestParametersInterface> = (props) => {
  const { id, type, required, internalPropperties, description } = props;

  const hasInternalPropperties = !isEmpty(internalPropperties);

  return (
    <Box listStyleType="none">
      <Stack flexDir="row" w="full" justify="space-between">
        <Text fontSize={["2xs", "2xs", "xs"]}>
          <chakra.span borderBottom="1px solid #e0def2">{id}:</chakra.span>

          <chakra.span pl="1" color="#4f4d5c">
            {type.toUpperCase()}
          </chakra.span>
          {required && <chakra.span color="red">{required}</chakra.span>}
        </Text>

        <RestShowText>{description}</RestShowText>
      </Stack>
      {hasInternalPropperties &&
        internalPropperties?.map((internal, index) => {
          const { id, description, required, type } = internal;
          const isLastIndex = internalPropperties.length - 1 === index;
          return (
            <Flex key={`${id}+${uniqueId()}`} justify="space-between" pl="4">
              <Flex
                justify="center"
                align="center"
                borderLeft={isLastIndex ? undefined : "1px solid #e0def2"}
              >
                {isLastIndex && (
                  <Flex
                    bg="#e0def2"
                    w="1px"
                    h="10px"
                    position="relative"
                    top="-5px"
                  />
                )}
                <IoIosReturnRight
                  style={{ position: "relative", left: "-2.5px" }}
                />
                <Text fontSize={["2xs", "2xs", "xs"]} whiteSpace="nowrap">
                  {id}:<chakra.span>{type.toUpperCase()}</chakra.span>
                  {required && (
                    <chakra.span color="red">{required}</chakra.span>
                  )}
                </Text>
              </Flex>

              <RestShowText>{description}</RestShowText>
            </Flex>
          );
        })}
    </Box>
  );
};
