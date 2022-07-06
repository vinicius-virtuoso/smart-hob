import { useContext } from "react";
import { UserContext } from "../../Context/Provider/User";
import Paginate from "../Paginate";

const DisplayCards = () => {
  const { userGroups } = useContext(UserContext);

  return <>{<Paginate card={userGroups} number={10} />}</>;
};
export default DisplayCards;
