import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Carousel, Container, Contain } from "./styles";
import { useEffect, useRef, useState } from "react";
import { api_habits } from "../../services/api";
import CardSugestoes from "../CardSugestoes";
// import { UserContext } from "../../Context/Provider/User";
// import { CountPagesContext } from "../../Context/Provider/CountPages";

const SugestionGroupsCarousel = () => {
  // const { user, userGroups } = useContext(UserContext);
  const [list, setList] = useState([]);

  const carousel = useRef(null);
  // const { randomPage, randomPageNumber } = useContext(CountPagesContext);

  useEffect(() => {
    api_habits.get(`/groups/`).then(({ data }) => {
      setList(data.results);
    });
  }, []);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;

    if (list.length < 60) {
      api_habits.get("/groups/").then(({ data }) => {
        setList([...list, ...data.results]);
      });
    }
  };

  return (
    <Container>
      {list.length > 0 && (
        <Contain>
          <button className="btn-arrow" onClick={handleLeftClick}>
            <IoMdArrowDropleft />
          </button>
          <Carousel ref={carousel}>
            {list.map((card, index) => (
              <CardSugestoes key={index} card={card} />
            ))}
          </Carousel>
          <button className="btn-arrow" onClick={handleRightClick}>
            <IoMdArrowDropright />
          </button>
        </Contain>
      )}
    </Container>
  );
};

export default SugestionGroupsCarousel;
