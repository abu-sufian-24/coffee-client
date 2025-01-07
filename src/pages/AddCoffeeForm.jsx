import { Link } from "react-router";

function AddCoffeeForm() {

  const handleSubmit = (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const chef = e.target.chef.value
    const supplier = e.target.supplier.value
    const taste = e.target.taste.value
    const category = e.target.category.value
    const details = e.target.details.value
    const photo = e.target.photo.value
    const price = e.target.price.value


    const coffeeObject = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
      price
    }
    console.log(coffeeObject);

  }
  return (
    <div
      className="min-h-screen bg-[url('/11.png')] bg-cover bg-center flex justify-center items-center"
    >
      <div className="bg-[#F4F3F0] p-8 rounded-lg shadow-lg w-[800px]">
        <button className="flex items-center text-gray-600 hover:text-gray-800 mb-4">
          <Link to={"/"} className="text-xl mr-2">&#8592;</Link> Back to home
        </button>
        <h2 className="text-2xl font-bold text-center mb-6">Add New Coffee</h2>
        <p className="text-center text-sm text-gray-700 mb-8">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm mb-2">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter coffee name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Chef</label>
            <input
              name="chef"
              type="text"
              placeholder="Enter coffee chef"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Supplier</label>
            <input
              name="supplier"
              type="text"
              placeholder="Enter coffee supplier"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Taste</label>
            <input
              name="taste"
              type="text"
              placeholder="Enter coffee taste"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Category</label>
            <input
              name="category"
              type="text"
              placeholder="Enter coffee category"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2">Details</label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm mb-2">Photo</label>
            <input
              type="URL"
              placeholder="Enter photo URL"
              name="photo"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700 text-sm mb-2">Price</label>
            <input
              type="number"
              placeholder="Price"
              name="price"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div className="col-span-2">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddCoffeeForm;
