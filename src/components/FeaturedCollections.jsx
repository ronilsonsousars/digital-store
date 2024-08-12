import Container from "./Container"
import shirt from "../assets/shirt.png"
import tenie from "../assets/tenis.png"
import fone from "../assets/fone.png"
import CardCollection from "./CardCollection"

import { IoShirtOutline } from "react-icons/io5"
import { MdOutlineHeadphones } from "react-icons/md"
import { PiBaseballCapLight, PiPantsDuotone } from "react-icons/pi"
import { GiConverseShoe } from "react-icons/gi"

function FeaturedCollections() {
  const cardList = [
    {
      id: 1,
      title: "Novo drop Supreme",
      discount: "30",
      image: shirt,
    },
    {
      id: 2,
      title: "Coleção Adidas",
      discount: "30",
      image: tenie,
    },
    {
      id: 3,
      title: "Novo Beats Bass",
      discount: "30",
      image: fone,
    },
  ]

  const categories = [
    {
      id: 1,
      icon: IoShirtOutline,
      title: "Camisetas",
    },
    {
      id: 2,
      icon: MdOutlineHeadphones,
      title: "Phones",
    },
    {
      id: 3,
      icon: PiPantsDuotone,
      title: "Calças",
    },
    {
      id: 4,
      icon: PiBaseballCapLight,
      title: "Bonés",
    },
    {
      id: 5,
      icon: GiConverseShoe,
      title: "Tênis",
    },
  ]
  return (
    <div className="w-full py-6">
      <Container>
        <div className="w-full flex flex-col gap-2">
          <div className="mt-10">
            <h4 className="text-gray-700 text-xl font-semibold mb-4">Coleções em destaque</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardList.map((item) => (
              <CardCollection key={item.id} title={item.title} discount={item.discount} image={item.image} />
            ))}
          </div>
        </div>

        <div>
          <div className="w-full mt-10 lg:mt-20 flex flex-row items-start lg:items-center lg:justify-center ">
            <h4 className="text-gray-700 text-xl font-semibold mb-4">Coleções em destaque</h4>
          </div>

          <div className="mt-1 md:mt-2 lg:mt-4 flex items-cente justify-center gap-8">
            {categories.map((item) => (
              <div key={item.id}>
                <div className="text-center">
                  <div className="rounded-full p-2 shadow-lg mb-2 w-24 h-24 flex flex-col items-center justify-center">
                    {
                      <item.icon className="text-3xl lg:text-5xl text-gray-400  hover:text-pink-600 cursor-pointer duration-200" />
                    }
                  </div>
                  <div>
                    <p className="text-base font-semibold">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
export default FeaturedCollections
