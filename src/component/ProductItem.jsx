
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
function ProductItem({ product }) {
  return (
    <div
      key={product.id}
      className="p-4 bg-[#F5F4F1] rounded-lg shadow-md relative"
    >
      <div className="flex items-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-[185px]"
        />
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Name: {product.name}
          </h3>
          <p className="text-sm text-gray-600">Chef: {product.chef}</p>
          <p className="text-sm text-gray-600">Price: {product.price}</p>
        </div>
      </div>
      <div className="absolute top-16 right-4 flex flex-col space-y-2">
        <button className="bg-gray-200 p-2 rounded-full hover:bg-yellow-500">
          <FaEye className="text-gray-600 hover:text-white" />
        </button>
        <button className="bg-gray-200 p-2 rounded-full hover:bg-green-500">
          <FaEdit className="text-gray-600 hover:text-white" />
        </button>
        <button className="bg-gray-200 p-2 rounded-full hover:bg-red-500">
          <FaTrashAlt className="text-gray-600 hover:text-white" />
        </button>
      </div>

    </div>
  )
}

export default ProductItem