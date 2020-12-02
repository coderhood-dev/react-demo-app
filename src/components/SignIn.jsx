import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";

export function SignIn({ toogleForm }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    history.push("/");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <Flex
      as="form"
      w="400px"
      p="2rem"
      direction="column"
      backgroundColor="white"
      border="1px solid #c2c2c2"
      borderRadius="8px"
      onSubmit={handleSubmit}
    >
      <Text>Welcome to Coderhood!</Text>
      <Heading mb="2rem">Signin</Heading>
      <Input mb="1rem" placeholder="Email" onChange={handleEmailChange} />
      <Input mb="1rem" placeholder="Password" onChange={handlePasswordChange} />
      <Button colorScheme="blue" mt="20px" type="submit">
        SignIn
      </Button>
      <Button mt="1rem" colorScheme="blue" variant="ghost" onClick={toogleForm}>
        First time here? SignUp
      </Button>
    </Flex>
  );
}
