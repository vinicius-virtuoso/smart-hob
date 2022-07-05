import { useContext, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import CardGroups from "../CardGroups";
import { Button, Flex, List, ListContainer } from "./style";

function LisSearch({ getGroups, get_groups }) {
  const [allGroups, setAllGroups] = useState(true);
  const { userGroups, get_user_groups } = useContext(UserContext);
  const [activeGroups, setActiveGroups] = useState("all");

  const renderAllGroups = () => {
    setAllGroups(true);
    setActiveGroups("all");
  };

  const renderUserGroups = () => {
    setAllGroups(false);
    setActiveGroups("user");
  };

  return (
    <ListContainer>
      <Flex>
        <Button active={activeGroups === "all"} onClick={renderAllGroups}>
          Todos os Grupos
        </Button>
        <Button active={activeGroups === "user"} onClick={renderUserGroups}>
          Seus Grupos
        </Button>
      </Flex>
      {allGroups ? (
        <List>
          {getGroups?.map((card) => (
            <CardGroups
              key={card.id}
              group={card}
              get_groups={get_groups}
              get_user_groups={get_user_groups}
            />
          ))}
        </List>
      ) : (
        <List>
          {userGroups.map((userGroup) => (
            <CardGroups
              key={userGroup.id}
              group={userGroup}
              get_user_groups={get_user_groups}
              get_groups={get_groups}
            />
          ))}
        </List>
      )}
    </ListContainer>
  );
}

export default LisSearch;
