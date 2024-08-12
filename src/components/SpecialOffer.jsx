import Container from "./Container"
import tenis2 from "../assets/tenis2.png"
import ellipse from "../assets/ellipse-gradient.png"
import { Link } from "react-router-dom"
function SpecialOffer() {
  return (
    <div className="w-full py-6 mt-0 bg-white lg:mt-10    ">
      <Container>
        <div className="w-full flex flex-col md:flex-row gap-3 md:gap-14 mb-0 md:mb-10 md:items-center">
          <div className="w-full flex flex-col items-center justify-center mt-16">
            <img src={tenis2} alt="Tenis oferta" className="z-10" />
            <img src={ellipse} alt="ellipse" className="absolute w-[350px] lg:w-[450px]  " />
          </div>
          <div className="w-full flex flex-col  items-start gap-1 mt-10">
            <p className="text-[#F6AA1C]  lg:text-pink-600 font-semibold text-base">Oferta especial</p>
            <h4 className=" w-72 font-bold text-3xl lg:text-5xl lg:w-[500px] text-gray-700 ">
              Air Jordan edição de colecionador
            </h4>
            <p className="text-base lg:text-lg text-gray-600 font-medium mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod cumque illo, omnis esse voluptate
              necessitatibus rem vel possimus veritatis ipsum porro exercitationem .
            </p>
            <Link
              to={"product-view"}
              className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
            >
              Ver Ofertas
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default SpecialOffer
