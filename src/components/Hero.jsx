import Container from "./Container"
import { Swiper, SwiperSlide } from "swiper/react"
import tenisHero from "../assets/tenis-hero.png"
// import tenis2 from "../assets/tenis-2.png"
// import tenis3 from "../assets/tenis-3.png"
import shape from "../assets/shape.png"

const imageGallery = [
  { id: "1", url: tenisHero, shape: shape },
  // { id: "2", url: tenis2, shape: shape },
  // { id: "3", url: tenis3, shape: shape },
]

function Hero() {
  return (
    <div className="w-full py-6 bg-neutral-100">
      <Container>
        <div>
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 6000 }}
            className="w-full"
          >
            {imageGallery.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center">
                  <div className="w-full flex flex-col justify-center lg:items-start items-center gap-2 md:gap-4">
                    <p className="text-pink-600 text-base -mt-5 md:-mt-24 lg:-mt-0 lg:text-[#F6AA1C] md:text-lg">
                      Melhores ofertas personalizadas
                    </p>
                    <h2 className="font-bold text-4xl md:text-6xl md:w-[500px] text-center lg:text-start w-80">
                      Queima de estoque Nike 🔥
                    </h2>
                    <p className="text-slate-600 text-center w-full text-base md:text-lg lg:text-start md:w-[400px] ">
                      Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                    </p>
                    <button className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">
                      Ver Ofertas
                    </button>
                  </div>
                  <div>
                    <img src={item.url} alt="tenis" className="w-full lg:w-[1500px] lg:-ml-20 " />
                    <img src={item.shape} alt="tenis" className="absolute top-2 right-0 -z-20" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  )
}

export default Hero
