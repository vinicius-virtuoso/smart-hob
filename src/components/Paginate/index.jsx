import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import CardUserGroups from "../CardUserGroups";
import { Container, ContainerCard, DivCard } from "./styles";

const Paginate = ({ card, number }) => {
  const [cardPerPage, setCardPerPage] = useState([]);
  const [pagNumber, setPagNumber] = useState(0);

  useEffect(() => {
    if (card) {
      setCardPerPage(card);
    }
  }, [card]);

  const productsPerPage = number;
  const pagesVisited = pagNumber * productsPerPage;

  const displayCard = cardPerPage
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((el, index) => {
      return (
        <div key={index}>
          {<CardUserGroups el={el} />}
        </div>
      );
    });

  const pageCounter = Math.ceil(card.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPagNumber(selected);
  };

  return (
    <Container>
      <ContainerCard>
        {displayCard}
      </ContainerCard>
      {/* <DivCard groups={card[0]?.name ? true : false}>{displayCard}</DivCard> */}
      {card.length > 10 ? (
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

      ): null}
    </Container>
  );
};
export default Paginate;
