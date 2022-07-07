import { useContext } from "react";
import { UserContext } from "../../Context/Provider/User";
import CardGroups from "../CardGroups";
import { Button, Flex, List, ListContainer } from "./style";

function LisSearch({
  getGroups,
  get_groups,
  activeGroups,
  renderAllGroups,
  renderUserGroups,
  allGroups,
}) {
  const { userGroups, get_user_groups } = useContext(UserContext);

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
