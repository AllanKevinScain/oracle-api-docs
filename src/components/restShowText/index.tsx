import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { SomeChildrenInterface } from "../../types";
import { truncate } from "lodash";
import { CustomButton } from "./customButton";

export const RestShowText: React.FC<SomeChildrenInterface> = (props) => {
  const { children } = props;
  const [showMoreText, setShowMoreText] = useState<boolean>(false);
  const childrenToString = children?.toString();
  const lengthTextGrandThanForty =
    !!children && children.toString().length > 40;

  const handleText = () => setShowMoreText((s) => !s);

  const content = showMoreText
    ? childrenToString
    : truncate(childrenToString, { length: 40, omission: "" });

  return (
    <Flex position="relative" w="full" maxW="70%" gap="8">
      <Text fontSize={["2xs", "2xs", "xs"]} w="full" textAlign="right">
        {content}
      </Text>
      <CustomButton onHandle={handleText} showButton={showMoreText}>
        {lengthTextGrandThanForty && !showMoreText && "...."}
      </CustomButton>
    </Flex>
  );
};
