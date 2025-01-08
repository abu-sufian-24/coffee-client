import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "./component/Layout"
import Home from "./pages/Home"
import AddCoffeeForm from "./pages/AddCoffeeForm"
import Update from "./pages/update/Update"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="add-coffee" element={<AddCoffeeForm />} />
            <Route path="update-coffee/:id" element={<Update />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
