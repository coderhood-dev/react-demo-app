import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Flex flex={1} justify="center" align="center" direction="column" w="full">
      {children}
    </Flex>
    <Footer />
  </Flex>
);
