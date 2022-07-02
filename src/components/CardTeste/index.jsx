import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../Context/Provider/User"
import CardHobbies from "../CardHobbies"
import Paginate from "../Paginate"

const CardTeste = () => {
    const [card, setCard] = useState([]);
    
    const { user } = useContext(UserContext);

    const loadCard = () => {
        setCard(user.groups);      

    }

    useEffect(() => {
        loadCard()
    }, [user])


    return (
        <>
            {card !== undefined ?
                <Paginate 
                card={card}
                
                />
                    
                : null
            }
        </>

    )
}
export default CardTeste