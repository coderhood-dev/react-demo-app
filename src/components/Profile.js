import React from "react";
import { Flex, Button, Text } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../context/user";

export const Profile = () => {
  const history = useHistory();

  const { user, setUser } = React.useContext(UserContext);
  const name = user && `${user.firstName} ${user.lastName}`;

  const handleSignOut = () => {
    setUser(null);

    history.push("/");
  };
  return (
    <Flex direction="column">
      <h1>Profile</h1>
      <Text>{name}</Text>
      <Button onClick={handleSignOut}>Sign Out</Button>
    </Flex>
  );
};
