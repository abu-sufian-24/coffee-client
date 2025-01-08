import { useContext } from "react"
import { AuthContext } from "../context"


function UseAuth() {
  const auth = useContext(AuthContext)
  return auth


}

export default UseAuth