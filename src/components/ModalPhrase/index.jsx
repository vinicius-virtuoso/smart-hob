import { useEffect, useState } from "react"
import { api_phrases } from "../../services/api";
import { AiFillCloseCircle } from "react-icons/ai";
import { Container, Div } from "./styled";

const ModalPhrase = () => {
    const [phrase, setPhrase] = useState([]);
    const [storage, setStorege] = useState([])
    const [open, setOpen] = useState()
    const guarding = JSON.parse(localStorage.getItem("show-frases"))

    const loadPhrase = () => {
        api_phrases.get(`/frases/random`)
            .then((res) => {
                const { frase } = res.data;
                setStorege(localStorage.setItem("show-frases", true));
                setPhrase(frase)
            })
            .catch(err => console.log(err))

    }
    const closePhrase = () => {
        setOpen(false);
        setStorege(localStorage.removeItem("show-frases", false));

    }

    const novamente = () => {
        loadPhrase();
        setOpen(true)
    }
    useEffect(() => {
        if (guarding === true) {
            setOpen(true)
            loadPhrase()
        }
    }, [])

    return (
        <>
            {!!open ? (
                <Container>
                    <Div>
                        <div>
                            <h5>Frase do Dia</h5>
                            <p>
                                {phrase || "Viva o hoje como se fosse o ultimo."}
                            </p>
                        </div>
                        <button onClick={closePhrase}>
                            <p><AiFillCloseCircle /></p>
                        </button>
                    </Div>
                </Container>

            ) : null}
            {/* <button onClick={novamente}>Abrir frase</button> */}
        </>

    )
}
export default ModalPhrase