import { useState } from "react";
import ReactPaginate from "react-paginate";
import CardGroups from "../CardGroups";
import CardHobbies from "../CardHobbies";
import { Container, DivCard } from "./styles";

const Paginate = ({ card, hobbies2, groups2 }) => {
  const [cardPerPage, setCardPerPage] = useState(card);
  const [pagNumber, setPagNumber] = useState(0);

  console.log(cardPerPage);

  const productsPerPage = 6;
  const pagesVisited = pagNumber * productsPerPage;

  const displayCard = cardPerPage
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((el, index) => {
      return (
        <div key={index}>
          {hobbies2 && <CardHobbies />}
          {groups2 && <CardGroups />}
        </div>
      );
    });

  const pageCounter = Math.ceil(card.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPagNumber(selected);
  };

  return (
    <Container>
      <DivCard>{displayCard}</DivCard>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={" >"}
        pageCount={pageCounter}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationAticve"}
      />
    </Container>
  );
};
export default Paginate;
