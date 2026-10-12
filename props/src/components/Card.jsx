

function Card({ btnText, content="explore this images" }) {
  // console.log(props);
  return (
   <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">
  <img
    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
    alt="Nature"
    className="w-full h-48 object-cover"
  />

  <div className="p-5">
    <h2 className="text-2xl font-bold text-gray-800">
      {content}
    </h2>

    <p className="mt-2 text-gray-600">
      {content}
    </p>

    <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      {btnText}
    </button>
  </div>
</div>
  )
}

export default Card