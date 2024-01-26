import { Button, ButtonProps, chakra } from "@chakra-ui/react";
import { CustomButtonInterface } from "../../types";
import { MdOutlineChangeCircle } from "react-icons/md";
import { motion } from "framer-motion";

const MotionButton = motion<ButtonProps>(Button);

export const CustomButton: React.FC<CustomButtonInterface> = (props) => {
  const { showButton, children, onHandle = () => null } = props;

  if (showButton) {
    return (
      <MotionButton
        fontSize="xs"
        h="6"
        minW="6"
        p="0"
        onClick={onHandle}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.5, 0.8, 1] }}
      >
        <MdOutlineChangeCircle />
      </MotionButton>
    );
  }

  return (
    <chakra.button fontSize="xs" onClick={onHandle}>
      {children}
    </chakra.button>
  );
};
