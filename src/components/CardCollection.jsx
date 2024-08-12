function CardCollection({ title, discount, image }) {
  return (
    <div className=" relative w-full h-[250px] rounded-xl flex flex-row gap-4 bg-[#D8E3F2]">
      <div className="absolute bottom-11 w-full flex flex-1 flex-col items-start justify-center  px-4" >
        <p className=" bg-lime-200 py-1 px-2 rounded-xl text-sm font-semibold" >{discount}% OFF</p>
        <h5 className="font-bold text-2xl  w-44 mt-3" >{title}</h5>
        <button className="bg-white px-3.5 py-2.5 font-medium rounded-lg text-pink-600 text-base mt-5" >Comprar</button>
      </div>
      <div className="mt-auto ml-auto"  >
        <img className="rounded-xl" src={image} alt="" />
      </div>
    </div>
  )
}

export default CardCollection