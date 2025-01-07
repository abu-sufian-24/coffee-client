

function Banner() {
  return (
    <div
      className="h-[700px] bg-[url('/3.png')] bg-cover bg-center bg-no-repeat flex justify-end items-center"
    >
      <div className="text-white px-4 w-[600px] mr-64">
        <h1 className="text-2xl font-bold mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="text-[12px] mb-6">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back! Your companion of every moment!!!
          Enjoy the beautiful moments and make them memorable.
        </p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded shadow-lg hover:bg-orange-600">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default Banner