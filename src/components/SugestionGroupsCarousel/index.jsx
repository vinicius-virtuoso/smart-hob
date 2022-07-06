import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Carousel, Container, Contain } from "./styles";
import { useEffect, useRef, useState, useContext } from "react";
import { api_habits } from "../../services/api";
import CardSugestoes from "../CardSugestoes";
import { UserContext } from "../../Context/Provider/User";

const SugestionGroupsCarousel = () => {
  const [list, setList] = useState([]);
  const carousel = useRef(null);
  // const { userGroups } = useContext(UserContext);

  // const filterGroups = (data) => {

  //   console.log(data)
  //   setList(data)
  //   let newArr = []

  //   for (let index = 0; index < list.length; index++) {

  //     const carousselGroupId = list[index].id;
  //     console.log(carousselGroupId)
      
  //     for (let index1 = 0; index1 < userGroups.length; index1++) {

  //       const userGroupId = userGroups[index1].id;
  //       console.log(userGroupId)

  //       if(carousselGroupId === userGroupId) {

  //         list.splice(index, 1)

  //       }
        
  //     }

  //     if(list[index] !== undefined) {

  //       newArr.push(list[index])
        
  //       console.log(newArr)

  //     }

  //   }

  //   setList(newArr)

  // }

  useEffect(() => {
 
    api_habits.get("/groups/").then(({ data }) => {

      setList(data.results)
      
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
