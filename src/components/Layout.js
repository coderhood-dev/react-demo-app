import { Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => (
  <Flex direction="column" minH="100vh">
    <Header />
    <Flex flex={1} justify="center" align="center" direction="column" w="full">
      {children}
    </Flex>
    <Footer />
  </Flex>
);
