import React from "react";
import { Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { Switch, Route, useHistory } from "react-router-dom";
import { UserContext } from "../context/user";
import { useAuth } from "../hooks";

export const Header = () => {
  const history = useHistory();
  const { user } = React.useContext(UserContext);
  const { users } = useAuth();
  console.log(`users header: ${JSON.stringify(users, null, 2)}`);

  const name = user && `${user.firstName} ${user.lastName}`;

  const handleNavigateHome = () => {
    history.push("/");
  };
  const handleNavigateProfile = () => {
    history.push("/profile");
  };
  return (
    <Flex
      minH="5rem"
      w="full"
      bg="orange.200"
      direction="row"
      justify="space-between"
      align="center"
      p="1rem 3rem"
    >
      <Avatar
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        onClick={handleNavigateHome}
      />
      <Switch>
        <Route path="/" exact>
          <Flex direction="row">
            <Button
              colorScheme="teal"
              variant="ghost"
              onClick={handleNavigateProfile}
            >
              <Text mr="1rem">{name || "Profile"}</Text>
              <Avatar
                size="xs"
                name="Dan Abrahmov"
                src="https://bit.ly/dan-abramov"
              />
            </Button>
          </Flex>
        </Route>
      </Switch>
    </Flex>
  );
};
