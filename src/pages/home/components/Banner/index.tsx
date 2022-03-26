import React from "react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { Logo } from "./Logo";
import Wave from "react-wavify";

export const Banner = React.memo(() => {
  const amplitude = useBreakpointValue({ base: 0.5, md: 1 });

  return (
    <Flex
      position="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height={{ base: "100vh" }}
      overflow="hidden"
      backgroundColor="white"
    >
      <Flex
        position="relative"
        transform={{ base: "scale(0.5)", md: "scale(1)" }}
        transformOrigin="center"
        justifyContent="center"
        alignItems="center"
      >
        <Logo />
      </Flex>
    </Flex>
  );
});
