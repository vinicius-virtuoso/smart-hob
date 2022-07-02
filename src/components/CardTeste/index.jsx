import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import CardGroups from "../CardGroups";
import CardHobbies from "../CardHobbies";
import Paginate from "../Paginate";

const CardTeste = ({ hobbies, groups }) => {
  const { user } = useContext(UserContext);
  const [groupsUser, setGroupsUser] = useState([]);
  const [hobbiesUser, setHobbiesUser] = useState([]);

  const loadCard = () => {
    if (user.groups && user.hobbies) {
      setGroupsUser(user?.groups);
      setHobbiesUser(user?.hobbies);
    }
  };

  useEffect(() => {
    loadCard();
  }, [user]);

  return (
    <>
      {hobbies && <Paginate card={hobbiesUser} hobbies2 />}
      {groups && <Paginate card={groupsUser} groups2 />}
    </>
  );
};
export default CardTeste;
