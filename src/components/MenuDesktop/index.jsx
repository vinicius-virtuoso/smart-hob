import { useNavigate } from "react-router-dom";
import { Button, Div, Ul } from "./styles";



const MenuDesktop = ({ arr }) => {
    const navigate = useNavigate();

    // const arr = [
    //     { text: "login", link: "", icon: <AiOutlineLogin /> },
    //     { text: "index", link: "/" },
    //     { text: "register", link: "/register" },
    //     { text: "index", link: "/" },
    //     { text: "register", link: "/register" },
        
    // ]

    return (
        <Div>            
            <Ul >
                {arr.map((el, index) => {
                    const { text, link, icon } = el;
                    return (
                        <li key={index}>
                            <Button onClick={navigate(link)}>
                                {<p>{icon}</p>}
                                <p>{text}</p>
                            </Button>
                        </li>
                    )
                })}
            </Ul>

        </Div>
    )
}
export default MenuDesktop