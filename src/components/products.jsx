import { useContext } from "react"
import dataContext from "../context/userContext"

const Products = () =>{

    const {item} = useContext(dataContext)
    return(
      <div>
        <h1>Products item is {item}</h1>
      </div>
    )
    }
    export default Products