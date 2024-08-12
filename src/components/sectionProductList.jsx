import CardItemList from "./CardItemList";
import Container from "./Container";
import { productsDadas } from '../dados/index';
import { FiFilter } from "react-icons/fi";

function SectionProductList() {
  const brands = [
    { name: 'Adidas' },
    { name: 'Balenciaga' },
    { name: 'K-Swiss' },
    { name: 'Nike' },
    { name: 'Puma' },
  ]

  const categories = [
    { name: 'Esporte e lazer' },
    { name: 'Casual' },
    { name: 'Ultilitário' },
    { name: 'Corrida' },
  ]

  const gender = [
    { name: 'Masculino' },
    { name: 'Feminino' },
    { name: 'Unissex' },
  ]

  const state = [
    { name: 'Novo' },
    { name: 'Usado' },
  ]

  return (
    <div className="w-full py-6 mt-0 lg:mt-16 " >
      <Container>
        <div className="w-full flex flex-col" >
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between mb-10" >
            <div className="md:w-full">
              <p className="font-semibold text-black text-base">Resultados para "Tênis" -
                <span className="text-gray-500">389 produtos</span>
              </p>
            </div>
            <div className="md:w-full flex flex-row items-center justify-center   mb-5 md:mb-0" >
              <div className=" w-full flex flex-row md:justify-end items-center gap-1" >
                <div className="bg-pink-600 p-3 rounded text-pink-300">
                  <FiFilter />
                </div>
                <select className="border-2 rounded p-2">
                  <option value="default">Padrão</option>
                  <option value="A-Z">A-Z</option>
                  <option value="Z-A">Z-A</option>
                  <option value="low-to-high">Menor Preço</option>
                  <option value="high-to-low">Maior Preço</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full   flex flex-row  gap-3 " >
            <div className="w-72 md:h-[650px] hidden md:flex flex-col bg-white px-10 py-5" >
              <p className=' font-bold text-xl mb-2 mt-2' >Filtra por</p>
              <p className="w-full h-[1px] bg-gray-700 rounded-full mb-3" ></p>

              <ul className='accent-rose-500' >
                <li className='font-semibold text-lg mb-2' >Marca</li>
                {
                  brands.map((item) => (
                    <li key={item.name}>
                      <label className='flex gap-1'>
                        <input type="checkbox" />
                        {item.name}
                      </label>
                    </li>
                  ))
                }
              </ul>

              <ul className='accent-rose-500 mt-4'>
                <li className='font-semibold text-lg mb-2'>Categoria</li>
                {
                  categories.map((item) => (
                    <li key={item.name}>
                      <label className='flex gap-1'>
                        <input type="checkbox" />
                        {item.name}
                      </label>
                    </li>
                  ))
                }
              </ul>

              <ul className='accent-rose-500 mt-4'>
                <li className='font-semibold text-lg mb-2'>Gênero</li>
                {
                  gender.map((item) => (
                    <li key={item.name}>
                      <label className='flex gap-1'>
                        <input type="checkbox" />
                        {item.name}
                      </label>
                    </li>
                  ))
                }
              </ul>

              <ul className='accent-rose-500 mt-4'>
                <li className='font-semibold text-lg mb-2'>Estado</li>
                {
                  state.map((item) => (
                    <li key={item.name}>
                      <label className='flex gap-1'>
                        <input type="radio" name="estado" />
                        {item.name}
                      </label>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {
                productsDadas.map((item) => (
                  <CardItemList
                    key={item.id}
                    title={item.title}
                    category={item.category}
                    price={item.price}
                    pricePrevious={item.pricePrevious}
                    image={item.image}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </Container >
    </div >
  )
}

export default SectionProductList