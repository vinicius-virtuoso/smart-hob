import { useState } from "react"
import ReactPaginate from "react-paginate";
import CardHobbies from "../CardHobbies";
import { Container, DivCard } from "./styles";


const Paginate = ({ card, cardContent }) => {

    const [cardPerPage, setCardPerPage] = useState(card.slice(0, 50));
    const [pagNumber, setPagNumber] = useState(0);

    const productsPerPage = 6;
    const pagesVisited = pagNumber * productsPerPage;

    const displayCard= cardPerPage.slice(pagesVisited, pagesVisited + productsPerPage)
        .map((el, index) => {
            return (
                <div key={index}>
                    {<CardHobbies name={el.name}/>}
                </div>
            )
        });

    
    const pageCounter = Math.ceil(card.length / productsPerPage);

    const changePage = ({ selected }) => {
        setPagNumber(selected)
    }

    return (
        <Container>
            <DivCard>
                {displayCard}
            </DivCard>
            < ReactPaginate
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
    )
}
export default Paginate