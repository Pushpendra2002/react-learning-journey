import { createContext, useState} from "react"
import ChildA from "./ChildA";


// context created
const UserContext = createContext();



function App() {
  
  const [user] = useState({name:"Pushpendra"});

  return (
    <>
      <UserContext.Provider value={user}>
         <ChildA/>
      </UserContext.Provider>
    </>
    
  )
}

export default App
export {UserContext}
