import React from "react";
import { useHistory } from "react-router-dom";
import { Flex, Button, Input, Heading, Text } from "@chakra-ui/react";
import { useAuth } from "../hooks";
import { UserContext } from "../context/user";

export function SignIn() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const { setUser } = React.useContext(UserContext);
  const history = useHistory();
  const { signin } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    signin(email, password)
      .then((user) => {
        setError(null);
        setLoading(false);

        setUser(user);

        history.push("/");
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
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
      {error ? <Text color="red.400">{error}</Text> : null}
      <Button
        colorScheme="blue"
        mt="20px"
        type="submit"
        disabled={loading}
        isLoading={loading}
      >
        SignIn
      </Button>
      <Button
        mt="1rem"
        colorScheme="blue"
        variant="ghost"
        onClick={() => {
          history.push("/signup");
        }}
      >
        First time here? SignUp
      </Button>
    </Flex>
  );
}
