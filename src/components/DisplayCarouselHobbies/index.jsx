import { useRef, useContext } from "react";
import { UserContext } from "../../Context/Provider/User";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import CardHobbies from "../CardHobbies";
import { Carousel, ContainerBtn, Section } from "./styles";

const DisplayCarouselHobbies = () => {
  const { userHobbies } = useContext(UserContext);
  const carousel = useRef(null);

  const handleLefClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRigthClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };


  return (
    <Section>
      <Carousel ref={carousel}>
        {userHobbies.map((el, index) => {
          return <div key={index}>{<CardHobbies el={el} />}</div>;
        })}
      </Carousel>
      {userHobbies.length > 6 ? (
        <ContainerBtn>
          <button onClick={handleLefClick}>
            <p>
              <BsFillArrowLeftSquareFill />
            </p>
          </button>
          <button onClick={handleRigthClick}>
            <p>
              {" "}
              <BsFillArrowRightSquareFill />
            </p>
          </button>
        </ContainerBtn>
      ) : null}
    </Section>
  );
};
export default DisplayCarouselHobbies;
