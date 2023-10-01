import {useContext} from "react"
import UserContext from "../context/userContext"

const Main = () =>{
    const {name} =useContext(UserContext)
    return(
      <div>
        <h1>Hello my name is {name}</h1>
      </div>
    )
    }
    export default Main