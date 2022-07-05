import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import Paginate from "../Paginate";

const DisplayCards = () => {
  const { userGroups, userHobbies } = useContext(UserContext);
  const [groupsUser, setGroupsUser] = useState([]);
  const [hobbiesUser, setHobbiesUser] = useState([]);

  useEffect(() => {
    if (userGroups) {
      setGroupsUser(userGroups);
      setHobbiesUser(userHobbies);
    }
  }, [userGroups, userHobbies]);

  return (
    <>      
      {<Paginate card={groupsUser} number={10} />}
    </>
  );
};
export default DisplayCards;
