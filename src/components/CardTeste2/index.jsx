import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Provider/User";
import CardHobbies from "../CardHobbies";
import Paginate from "../Paginate";

const CardTeste2 = ({ id }) => {
  const [card, setCard] = useState([]);
  const { user } = useContext(UserContext);

  const loadCard = () => {
    setCard(user.hobbies);
  };

  useEffect(() => {
    loadCard();
  }, [user]);

  return (
    <>
      {card !== undefined ? <Paginate card={card} CardContent={false} /> : null}
    </>
  );
};
export default CardTeste2;
