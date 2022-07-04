import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Carousel, Container, Contain } from "./styles";
import { useEffect, useRef, useState } from "react";
import { api_habits } from "../../services/api";
import CardSugestoes from "../CardSugestoes";

const SugestionGroupsCarousel = () => {
  const [list, setList] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    api_habits.get("/groups/").then(({ data }) => {
      setList(data.results);
    });
  }, []);

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    console.log(list)

    if (list.length % 15 === 0) {
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
