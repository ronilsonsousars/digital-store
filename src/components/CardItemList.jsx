import { Link } from "react-router-dom"

function CardItemList({ title, category, price, image, discount, pricePrevious }) {
  return (
    <>
      <Link
        to="/product-view"
        state={{
          title: title,
          category: category,
          price: price,
          discount: discount,
          pricePrevious: pricePrevious,
          image: image,
        }}
        className="relative w-full px-1  flex flex-col gap-4 mb-5 "
      >
        <div className="w-full lg:h-60 bg-white">
          {discount && (
            <p className="absolute top-4 left-2 md:top-6 md:left-3 bg-lime-200 py-1 px-2 rounded-xl text-sm">
              {discount}% OFF
            </p>
          )}
          <img className="mt-4 w-full   " src={image.url} alt="tenis" />
        </div>
        <div className="w-full flex flex-col ">
          <p className="text-xs">{category}</p>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-base font-semibold">
            {pricePrevious && <del className="text-base text-gray-400">${pricePrevious}</del>} ${price}
          </p>
        </div>
      </Link>
    </>
  )
}

export default CardItemList
