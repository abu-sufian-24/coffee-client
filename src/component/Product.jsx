

import img1 from "../assets/images/1.png"
import img2 from "../assets/images/2.png"
import img3 from "../assets/images/3.png"
import img4 from "../assets/images/4.png"
import ProductItem from "./ProductItem";


function Product() {
  const products = [
    {
      id: 1,
      name: "Americano Coffee",
      chef: "Mr. Matin Paul",
      price: "890 Taka",
      image: img1,
    },
    {
      id: 2,
      name: "Black Coffee",
      chef: "Mr. Nibra Sweden",
      price: "890 Taka",
      image: img2,
    },
    {
      id: 3,
      name: "Espresso Coffee",
      chef: "Mrs. Morisha",
      price: "890 Taka",
      image: img3,
    },
    {
      id: 4,
      name: "Cappuccino Coffee",
      chef: "Mr. Moruti",
      price: "890 Taka",
      image: img4,
    },
    {
      id: 5,
      name: "Macchiato",
      chef: "Mr. Moruti",
      price: "890 Taka",
      image: img1,
    },
    {
      id: 6,
      name: "Decaf Coffee",
      chef: "Mr. Moruti",
      price: "890 Taka",
      image: img2,
    },
  ];

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
            {products.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Product