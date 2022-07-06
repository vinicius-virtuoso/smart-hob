import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import Paginate from "../Paginate";

const DisplayCards = () => {
  const { userGroups, userHobbies } = useContext(UserContext);
  
  return (
    <>      
      {<Paginate card={groupsUser} number={10} />}

    </>
  );
};
export default DisplayCards;
