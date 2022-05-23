import React from "react";
import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";

export const Banner = React.memo(() => {
  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height={{ base: "100vh" }}
      overflow="hidden"
      backgroundColor="black"
    >
      <Flex
        position="relative"
        transform={{ base: "scale(0.75)", md: "scale(1.25)" }}
        transformOrigin="center"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
      </Flex>
    </Flex>
  );
});
