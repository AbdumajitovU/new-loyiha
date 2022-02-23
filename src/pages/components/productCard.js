import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { Link } from "react-router-dom";

function ProductCard({ title, image, price, rating, id }) {
  return (
    <Link to={`/stadium/${id}`}>
      <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4">
          <img
            className=" aspect-4/3 object-cover"
            src={image}
            alt="product image"
          />
        </div>
        <div className="px-5 pb-5">
          <a href="#">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h3>
          </a>
          <Rate
            count={5}
            disabled={true}
            defaultValue={rating}
            allowHalf={true}
          />
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-gray-900 dark:text-white">
              ${price}
            </span>
            <a
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
