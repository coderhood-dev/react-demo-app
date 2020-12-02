import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../hooks";

export function SignUp({ toogleForm }) {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const history = useHistory();
  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    signup(user)
      .then(() => {
        history.push("/signin");
      })
      .catch((e) => {
        console.log("errors", e);
      });
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
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
      <Heading mb="2rem">Signup</Heading>
      <Input
        onChange={handleFirstNameChange}
        mb="1rem"
        placeholder="First Name"
      />
      <Input
        onChange={handleLastNameChange}
        mb="1rem"
        placeholder="Last Name"
      />
      <Input onChange={handleEmailChange} mb="1rem" placeholder="Email" />
      <Input onChange={handlePasswordChange} mb="1rem" placeholder="Password" />
      <Button colorScheme="blue" mt="20px" type="submit">
        Signup
      </Button>
      <Button mt="1rem" colorScheme="blue" variant="ghost" onClick={toogleForm}>
        Already have an account? SignIn
      </Button>
    </Flex>
  );
}
