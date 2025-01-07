import { BrowserRouter, Route, Routes } from "react-router"

import Layout from "./component/Layout"
import Home from "./pages/Home"
import AddCoffeeForm from "./pages/AddCoffeeForm"


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<Home />} />
            <Route path="add-coffee" element={<AddCoffeeForm />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
