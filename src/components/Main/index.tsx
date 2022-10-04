import React from "react";
import { Box, Center, Image, Text, Flex } from "@chakra-ui/react";
import duckLogo from "../../assets/duck96.png";

import SearchImageBox from "../SearchImageBox";

const Main = () => {
  return (
    <Center h="100vh">
      <Box p={5} maxW={400} borderWidth={1}>
        <Flex marginBottom={3} justifyContent={"center"} alignItems={"center"}>
          <Image maxW={16} borderRadius="md" src={duckLogo} />
          <Text marginLeft={2} fontSize={30} as={"b"} color="#00B3D7">
            duck.img
          </Text>
        </Flex>
        <SearchImageBox />
      </Box>
    </Center>
  );
};

export default Main;
