import { Link } from "react-router"
import img1 from "../assets/images/more/logo1.png"



function Navbar() {
  return (
    <div className=" bg-[url('/15.jpg')] bg-cover bg-center bg-no-repeat h-20 flex justify-center items-center gap-3 bg-white bg-opacity-80 px-4 py-2 rounded">
      <img className="w-10" src={img1} alt="logo" />
      <span className="font-bold text-lg text-white">Espresso Emporium</span>
      <Link className="text-lg text-white font-bold hover:text-red-500" to={"/"}>Home</Link>
      <Link className="text-lg text-white font-bold hover:text-red-500" to={"/add-coffee"}>Add Coffee</Link>
      <Link className="text-lg text-white font-bold hover:text-red-500 ml-24" to={"/login"}>Login</Link>
    </div>

  )
}

export default Navbar