import { Flex, Button, Avatar, Text } from "@chakra-ui/react";
import { Switch, Route, useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();

  const handleNavigateHome = () => {
    history.push("/");
  };
  const handleNavigateProfile = () => {
    history.push("/profile");
  };
  return (
    <Flex
      minH="5rem"
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
              <Text mr="1rem">Profile</Text>
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
