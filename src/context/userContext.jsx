import { createContext ,useState } from "react";

const dataContext = createContext()

export const FetchProvider = ({children}) =>{


    const userData = {
        name:"MOiz",
        email:"abc@email.com"
    }
    const [item , setItem] = useState(0)


return(
<dataContext.Provider value={{item 
    , setItem,
    userData
    }}>
    {children}
</dataContext.Provider>

)
}




export default dataContext;