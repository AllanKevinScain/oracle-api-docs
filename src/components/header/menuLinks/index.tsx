import { Stack } from "@chakra-ui/react";
import { MenuItem } from "./menuItem";

export const MenuLinks = () => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
    >
      <MenuItem to="/">Start</MenuItem>
    </Stack>
  );
};
