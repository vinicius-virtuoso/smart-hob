import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Carousel, Container, Contain } from "./styles";
import { useRef } from "react";
import CardHobbies from '../CardHobbies'

const SugestionGroupsCarousel = () => {

  const carousel = useRef(null)

  const handleLeftClick = () => {
    carousel.current.scrollLeft -= carousel.current.offsetWidth
  }

  const handleRightClick = () => {
    carousel.current.scrollLeft += carousel.current.offsetWidth
  }

  return (

    <Container>
      <Contain>
        <button onClick={handleLeftClick}><IoMdArrowDropleft/></button>
        <Carousel ref={carousel}>
          {/* {apiresponse.map(()=>{
          return (
            <CardSugestion />
          )
          })} */}
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
          <CardHobbies />
        </Carousel>
        <button onClick={handleRightClick}><IoMdArrowDropright/></button>
      </Contain>
    </Container>

  );

};

export default SugestionGroupsCarousel;