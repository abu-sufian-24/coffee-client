

import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import Swal from "sweetalert2";


function Product() {
  const [coffees, setCoffees] = useState([])


  useEffect(() => {
    fetch("http://localhost:4000/coffees")
      .then((res) => res.json())
      .then((data) => {
        setCoffees(data)
      })
  }, [])

  const handleClick = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newData = coffees.filter((coffee) => coffee._id !== id)
              setCoffees(newData)
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }


          })

      }
    });

  }


  return (
    <>



      <section
        className="py-12 bg-[url('/path-to-bg-image.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Popular Products</h2>
            <p className="text-sm text-gray-500">--- Sip & Savor ---</p>
            <button className="m-4 bg-[#E3B577] text-white px-6 py-2 rounded shadow-md hover:bg-yellow-600">
              Add Coffee ☕
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coffees.map((product) => (
              <ProductItem key={product._id} product={product} handleClick={handleClick} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Product