import { useContext } from "react";
import { ShopContext } from "../contexts/ShopContext";
import { Link } from "react-router-dom";

function ProductItem({ id, image, name, price }) {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="cursor-pointer text-gray-700" to={`/products/${id}`}>
      <div className="overflow-hidden">
        <img
          className="transition ease-in-out hover:scale-110"
          src={image[0]}
          alt={name}
        />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
}

export default ProductItem;
