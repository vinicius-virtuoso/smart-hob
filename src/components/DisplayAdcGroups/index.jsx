import { useNavigate } from "react-router-dom"
import ButtonAdd from "../ButtonAdd"
import { Div, Section } from "./styles"

const DisplayAdcGroups = () =>{
    const navigate = useNavigate()
    return(
        <Div>
            <Section>            <h3>Encontrar novas distrações</h3>
            <ButtonAdd theme={"tertiary"} size={"medium"} onClick={()=> navigate("/")}/>

            </Section>
        </Div>
    )

}
export default DisplayAdcGroups