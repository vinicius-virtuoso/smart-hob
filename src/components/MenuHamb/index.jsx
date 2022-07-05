import { Div, Button, Ul, Menu } from "./styles"
import { NavLink } from "react-router-dom"

const MenuHamb = ({ arr }) => {
    return (
        <Div>
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn"><span></span></label>
            <label htmlFor="active" className="close" ></label>
            <Menu className="wrapper">
                <Ul>
                    {arr.map((el, index) => {
                        return (
                            <li key={index}>
                                <Button onClick={el.click}>
                                    <a href={el.link}>{el.text}</a>
                                </Button>
                            </li>
                        )
                    })}
                </Ul>
            </Menu>
        </Div>
    )
}
export default MenuHamb