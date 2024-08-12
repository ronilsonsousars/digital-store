import Container from './Container'
import logoWhite from '../assets/logo-white.png'
import { Link } from 'react-router-dom'

function Footer() {
  const navigation = [
    { name: 'Sobre Drip Store', href: 'about' },
    { name: 'Segurança', href: 'Safety' },
    { name: 'Wishlist', href: 'wishlist' },
    { name: 'Blog', href: 'blog' },
    { name: 'Trabalhe Conosco', href: 'work' },
    { name: 'Meus Pedidos', href: 'cart' },
  ]

  const categories = [
    { name: 'Camisetas', href: 'product-list' },
    { name: 'Calças', href: 'product-list' },
    { name: 'Bonés', href: 'product-list' },
    { name: 'Headphones', href: 'product-list' },
    { name: 'Tênis', href: 'product-list' },
  ]
  return (
    <div className='w-full py-6  bg-[#1f1f1f] mb-auto'>
      <Container>
        <div className='w-full flex flex-col md:flex-row gap-8 py-6  lg:justify-between '>
          {/*Logo*/}
          <div className='flex flex-col gap-5' >
            <img src={logoWhite} alt="Digital-Store" className='w-48' />
            <p className='text-gray-200 text-base w-full md:w-60 lg:w-72' >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus quidem,   saepe incidunt explicabo cupiditate.
            </p>
          </div>

          {/* Links Úteis */}
          <div className='flex flex-row gap-10 lg:gap-36 lg:justify-between' >
            <div>
              <h6 className='text-lg font-bold text-gray-200 mb-3'>Informação</h6>
              <ul>
                {
                  navigation.map((item) => (
                    <li>
                      <Link
                        key={item.name}
                        to={item.href}
                        className='text-base text-gray-100 hover:text-pink-600 hover:underline cursor-pointer'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Categorias */}
          <div className='flex flex-row gap-10 lg:gap-36 lg:justify-between' >
            <div>
              <h6 className='text-lg font-bold text-gray-200 mb-3'>Categorias</h6>
              <ul>
                {
                  categories.map((item) => (
                    <li>
                      <Link
                        key={item.name}
                        to={item.href}
                        className='text-base text-gray-100 hover:text-pink-600 hover:underline cursor-pointer'
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h6 className='text-lg font-bold text-gray-200 mb-3' >Contato</h6>
            <p className='text-gray-200 text-base w-full lg:w-80' >Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>

            <p className='text-gray-200 text-base mt-4' >(85) 3051-3411</p>
          </div>
        </div>
        <hr />
        <div className='w-full flex flex-row items-center justify-center mt-7 mb-3' >
          <p className='text-xs text-gray-300' >© 2024 Digital College</p>
        </div>
      </Container>
    </div>
  )
}

export default Footer
