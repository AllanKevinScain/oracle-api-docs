import { Flex, chakra } from "@chakra-ui/react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaArrowRotateRight } from "react-icons/fa6";

export const SimulatedBrowserNavigation: React.FC = () => {
  const handleAction = (type: string) => {
    if (typeof window !== "undefined") {
      if (type === "back") {
        return window.history.back();
      }
      if (type === "forward") {
        return window.history.forward();
      }

      return window.location.reload();
    }
  };

  return (
    <Flex align="center" gap="4">
      <chakra.button onClick={() => handleAction("back")}>
        <IoMdArrowBack style={{ fontSize: "18px" }} />
      </chakra.button>
      <chakra.button onClick={() => handleAction("forward")}>
        <IoMdArrowForward style={{ fontSize: "18px" }} />
      </chakra.button>
      <chakra.button onClick={() => handleAction("")}>
        <FaArrowRotateRight style={{ fontSize: "13px" }} />
      </chakra.button>
    </Flex>
  );
};
