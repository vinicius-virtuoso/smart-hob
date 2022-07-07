import { useState } from 'react';
import { BsFillArrowUpSquareFill } from 'react-icons/bs';
import { Div } from './styles';
const ButtonScrollTop = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);
    return (
        <Div>
            <button onClick={scrollToTop}>
                <p><BsFillArrowUpSquareFill style={{ display: visible ? 'inline' : 'none' }} /></p>
            </button>
        </Div>
    )
}

export default ButtonScrollTop