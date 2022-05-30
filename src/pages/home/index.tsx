import React from "react";
import { Flex } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { LoginButton } from "./components/LoginButton";
import { LoginDrawer } from "./components/LoginDrawer";
import { Corner } from "./components/Corner";

export const App = React.memo(() => {
  return (
    <Flex flexDirection="column">
      <Corner />
      <Banner />
      <LoginButton />
      <LoginDrawer />
    </Flex>
  );
});
