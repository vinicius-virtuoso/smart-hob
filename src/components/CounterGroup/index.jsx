import { useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../Context/Provider/User"
import { Div, Li, Ul } from "./styles"


const CounterGroup = () => {
    const { user } = useContext(UserContext)

    const [groups, setGroups] = useState([]);
    const [hobbies, setHobbies] = useState([]);


    const loadSize = () => {
        if (user.groups && user.hobbies !== undefined) {

            setGroups(user.groups);
            setHobbies(user.hobbies);
        }
    }

    useEffect(() => {
        loadSize()
    }, [user])


    return (
        <Div>
            <Ul>
                <Li>
                    <p>{groups.length}</p>                    
                    <p>Hobbies</p>
                </Li>
                <Li>
                    <p>{hobbies.length}</p>
                    <p>Grupos</p>
                </Li>
            </Ul>            
        </Div>
    )
}
export default CounterGroup