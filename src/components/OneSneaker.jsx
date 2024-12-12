import "./OneSneaker.css"
import formatPrice from "../function/FormatPrice"
import PropTypes from "prop-types"
import { LuShoppingBag } from "react-icons/lu"

const OneSneaker = ({ image, brand, title, price }) => {
  return (
    <>
      <img src={image} alt={title} />
      <h3>{brand}</h3>
      <h2>{title}</h2>
      <div className="price-and-btn">
        <p>{formatPrice(price)}</p>
        <button><LuShoppingBag /></button>
      </div>
    </>
  )
}

export default OneSneaker

// Validace props
OneSneaker.propTypes = {
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}