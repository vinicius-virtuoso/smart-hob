import { useEffect, useState } from "react"
import { api_phrases } from "../../services/api"

const Alternative = () => {
    const [phrase, setPhrase] = useState([]);
    const [storage, setStorege] = useState([])
    const [open, setOpen] = useState()
    const teste = JSON.parse(localStorage.getItem("show-frases"))

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
    useEffect(() => {
        if (teste === true) {
            setOpen(true)
            loadPhrase()
        }
    }, [])

    console.log(storage)
    const novamente = () =>{
        loadPhrase();
        setOpen(true)

    }
   console.log(teste)

    return (
        <>
            {!!open ? (
                <div>
                    <p>
                        {phrase}
                    </p>                    
                    <button onClick={closePhrase}>X</button>
                </div>
                
            ) : <button onClick={novamente}>Abrir frase</button>}
        </>

    )
}
export default Alternative