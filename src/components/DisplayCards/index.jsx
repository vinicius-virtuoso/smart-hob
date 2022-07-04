import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import Paginate from "../Paginate";

const DisplayCards = ({ hobbies, groups }) => {
  const { userGroups, userHobbies } = useContext(UserContext);
  const [groupsUser, setGroupsUser] = useState([]);
  const [hobbiesUser, setHobbiesUser] = useState([]);

  useEffect(() => {
    if (userGroups && userHobbies) {
      setGroupsUser(userGroups);
      setHobbiesUser(userHobbies);
    }
  }, [userGroups, userHobbies]);

  return (
    <>
      {hobbies && <Paginate card={hobbiesUser} hobbies2 />}
      {groups && <Paginate card={groupsUser} groups2 />}
    </>
  );
};
export default DisplayCards;
