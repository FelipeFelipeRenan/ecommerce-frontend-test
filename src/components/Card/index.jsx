import "./index.scss"


const Card = (props) => {

    return(
        <div className="card">
            {props.name}
            {props.price}
           
        </div>
    )

}


export default Card;