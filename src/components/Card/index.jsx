import "./index.scss"


function clicado(){
    window.prompt("clicado")
}


const Card = (props) => {

    return(
        <div className="card">
            <div>Item: {props.name}</div>

            <div>Preço: {props.price}</div>
            <button onClick={clicado}>Adicionar</button>
           
        </div>
    )

}


export default Card;