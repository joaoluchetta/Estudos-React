import {  useState } from "react"

const ConditionalRender = () => {
    let [x, setX] = useState(true);

    function handleSwitch(){
        setX((prevX) => !prevX);
    }

    return (
        <div>
            <h1>Isso será exibido?</h1>   
            {x ? (<p>Essa mensagem só é exibida quando o X == false</p>) : (<p>Agora X == true</p>)}
            <button onClick={handleSwitch}>Switch</button>
        </div>
    )
}

export default ConditionalRender
