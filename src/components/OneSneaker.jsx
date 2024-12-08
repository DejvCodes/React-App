import "./OneSneaker.css"
import OrderButton from "./OrderButton"
import formatPrice from "../function/FormatPrice"
import PropTypes from "prop-types"

const OneSneaker = ({ image, brand, title, price }) => {
  return (
    <div className="one-sneaker">
      <img src={image} alt={title} />
      <h3>{brand}</h3>
      <h2>{title}</h2>
      <div className="price-and-btn">
        <p>{formatPrice(price)}</p>
        <button><OrderButton /></button>
      </div>
    </div>
  )
}

export default OneSneaker

// Validace props
OneSneaker.propTypes = {
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};