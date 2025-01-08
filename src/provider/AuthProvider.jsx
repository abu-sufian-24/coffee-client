import { useState } from "react"
import { AuthContext } from "../context"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";



function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);


  const createUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const userInfo = {
    user,
    loader,
    createUser
  }
  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider