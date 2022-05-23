import React from "react";
import { Flex } from "@chakra-ui/react";
import { Banner } from "./components/Banner";
import { LoginButton } from "./components/LoginButton";
import { LoginDrawer } from "./components/LoginDrawer";
import corner from "./corner.png";

export const App = React.memo(() => {
  return (
    <Flex flexDirection="column">
      <img
        src={corner}
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          width: 400,
          height: 400,
          zIndex: 1,
        }}
        alt="corner"
      />

      <Banner />
      <LoginButton />
      <LoginDrawer />
    </Flex>
  );
});
