import { Code, chakra, Flex, Stack, Heading } from "@chakra-ui/react";
import { DataOfCaracteristicFeatureInterface } from "../../types";
import { prettyPrintJson } from "pretty-print-json";
import { useRef, useState } from "react";
import { LuCopy } from "react-icons/lu";
import { LuAlarmCheck } from "react-icons/lu";
import { isEmpty } from "lodash";

export const ExampleSession: React.FC<
  Pick<DataOfCaracteristicFeatureInterface, "example">
> = (props) => {
  const { example } = props;
  const [dealWithClipboard, setDealWithClipboard] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = async () => {
    if (typeof window !== "undefined") {
      const textToCopy = inputRef?.current?.value as string;

      try {
        await navigator.clipboard.writeText(textToCopy);
        setDealWithClipboard(true);
        setTimeout(() => setDealWithClipboard(false), 2000);
      } catch (err) {
        alert(err);
      }
    }
  };

  if (isEmpty(example)) return <></>;

  return (
    <Stack gap="3">
      <Heading as="h3" fontSize={["sm", "md", "md"]} pt="6">
        Example data:
      </Heading>
      <input
        ref={inputRef}
        style={{ display: "none" }}
        onChange={() => null}
        value={JSON.stringify(example)}
      />
      <Flex position="relative">
        <Code
          w="full"
          dangerouslySetInnerHTML={{
            __html: prettyPrintJson.toHtml(example, {
              lineNumbers: true,
              linkUrls: true,
              linksNewTab: true,
              trailingCommas: true,
            }),
          }}
        />
        <chakra.button
          disabled={dealWithClipboard}
          position="absolute"
          right="4"
          top="2"
          fontSize={["xs", "md"]}
          onClick={copyToClipboard}
          bg="#2A273F"
          py="1"
          px="3"
          rounded="lg"
          display="flex"
          alignItems="center"
          gap="2"
          _disabled={{ bg: "#232135", opacity: 0.5 }}
          _hover={{ bg: "#444061", color: "#e0def2" }}
        >
          {dealWithClipboard ? (
            <LuAlarmCheck style={{ color: "#26823e" }} />
          ) : (
            <LuCopy />
          )}
          {dealWithClipboard ? "copied" : "copy"}
        </chakra.button>
      </Flex>
    </Stack>
  );
};
