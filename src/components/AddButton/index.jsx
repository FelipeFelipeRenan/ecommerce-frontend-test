import { useEffect, useState } from "react"




const AddButton = (props) => {
    const [addState, setAddState] = useState([])


    return(
        <button onClick={(props) => {
            setAddState(props)
            console.log("carriho")
            console.log(addState)
            window.alert(`Item ${props.name} adicionado com sucesso!`);}
         } > ADD </button>
    )
}


export default AddButton