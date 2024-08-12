import Container from "./Container"
import CardItemList from "./CardItemList"
import { FaArrowRightLong } from "react-icons/fa6"
import { productsDadas } from "../dados/index"
import { Link } from "react-router-dom"

function TrendingProducts() {
  return (
    <div className="w-full py-6 mt-0 lg:mt-16 ">
      <Container>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-row items-center justify-between mb-10">
            <h4 className="text-gray-700 text-xl font-semibold ">Coleções em destaque</h4>
            <Link to="/product-list" className="flex flex-row items-center gap-1 text-pink-600 text-base font-medium ">
              Ver todos <FaArrowRightLong />{" "}
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productsDadas.map((item) => (
              <CardItemList
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                pricePrevious={item.pricePrevious}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
export default TrendingProducts
