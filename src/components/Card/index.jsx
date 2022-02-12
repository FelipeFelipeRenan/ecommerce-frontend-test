import "./index.scss"

const Card = (props) => {

    return(
        <div className="card">
            <div>Item: {props.name}</div>

            <div>Preço: {props.price}</div>
          
        </div>
    )

}


export default Card;