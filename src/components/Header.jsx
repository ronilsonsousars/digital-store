import Container from "./Container"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import logoIcon from "../assets/logo.png"
import { Link } from "react-router-dom"

function Header() {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Produtos", href: "product-list" },
    { name: "Categorias", href: "categories" },
    { name: "Meus Pedidos", href: "cart" },
  ]

  return (
    <div className="w-full py-6 bg-white shadow-sm">
      <Container>
        <div className="w-full flex  flex-row items-center justify-between">
          <img src={logoIcon} alt="Digital-Store" className="w-32 md:w-52" />
          <div className=" hidden md:flex w-full  flex-row items-center justify-center gap-3  ">
            <div className="flex flex-row bg-slate-100 items-center justify-center  h-11 rounded-lg w-[60%] md:w-[50%] lg:w-[70%]  ">
              <input
                type="text"
                name="pesquisar"
                placeholder="Pesquisar"
                className="bg-transparent h-10 w-full px-6 py-4 focus:outline-none"
              />
              <IoSearchOutline className="mr-4 text-gray-400 text-xl" />
            </div>

            <div className=" flex flex-row items-center justify-center gap-6 ml-5 md:ml-2">
              <a href="#" className="underline px-3.5 py-2.5 text-base font-semibold hover:text-pink-500 duration-200 ">
                Cadastre-se
              </a>
              <Link
                to="#"
                className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              >
                Entrar
              </Link>
              <IoCartOutline className="text-pink-500 text-3xl md:text-4xl cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Navegation */}
        <div className="mt-8 hidden md:block">
          <nav>
            <ul className="w-full flex flex-row text-lg font-medium gap-9 ">
              {navigation.map((item) => (
                <li>
                  <Link
                    key={item.name}
                    to={item.href}
                    className={
                      "text-slate-600 cursor-pointer text-base font-semibold hover:underline hover:text-pink-600"
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}

export default Header
