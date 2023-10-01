import { useContext } from "react"
import UserContext from "../context/userContext"
import dataContext from "../context/userContext"
const Members = () =>{

    const {setItem} =useContext(UserContext)
    const {userData} = useContext(dataContext)
    return(
      <div>
        <h1>Members </h1>
      
        <button onClick={()=>setItem(20)}>Change Item</button>
      </div>
    )
    }
    export default Members