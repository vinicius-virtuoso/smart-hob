import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Carousel, Container, Contain } from "./styles";
import { useEffect, useRef, useState } from "react";
import CardHobbies from "../CardHobbies";
import { api_habits } from "../../services/api";

const SugestionGroupsCarousel = () => {
  const [list, setList] = useState([]);
  const carousel = useRef(null);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  useEffect(() => {
    api_habits.get("/groups/").then(({ data }) => {
      setList(data.results);
      console.log(data.results);
    });
  }, []);

  return (
    <Container>
      {list.length > 0 && (
        <Contain>
          <button onClick={handleLeftClick}>
            <IoMdArrowDropleft />
          </button>
          <Carousel ref={carousel}>
            {list.map((card) => (
              <CardHobbies key={card.id} group={card} />
            ))}
          </Carousel>
          <button onClick={handleRightClick}>
            <IoMdArrowDropright />
          </button>
        </Contain>
      )}
    </Container>
  );
};

export default SugestionGroupsCarousel;
