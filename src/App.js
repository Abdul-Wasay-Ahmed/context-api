import Main from "./components/main"
import Members from "./components/members"
import Products from "./components/products"
import { FetchProvider } from "./context/userContext"


const App = () =>{
return(
  <div>
    <h1>App.js</h1>
   <FetchProvider>
<Main/>
<Members/>
<Products/>
</FetchProvider>

  </div>
)
}
export default App