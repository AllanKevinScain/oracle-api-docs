import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {
  profileData,
  cartCheckoutData,
  orderData,
  productsData,
} from "../../constants";
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { useState } from "react";
import { capitalize } from "lodash";

export const HoverLink: React.FC<{ displayName: string }> = (props) => {
  const { displayName } = props;
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleHover = () => setIsHovered((s) => !s);

  const selectedState = (name: string) => {
    switch (name) {
      case "products":
        return productsData;
      case "cart-checkout":
        return cartCheckoutData;
      case "order":
        return orderData;
      default:
        return profileData;
    }
  };

  return (
    <Link
      key={displayName}
      to={`/actions/${displayName}`}
      state={selectedState(displayName)}
      style={{
        ...(isHovered && {
          color: "#e0def2",
          backgroundColor: "#2A273F",
        }),
      }}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <Flex align="center" px="6" py="2" gap="6">
        <MdSubdirectoryArrowRight />

        {capitalize(displayName)}
      </Flex>
    </Link>
  );
};
