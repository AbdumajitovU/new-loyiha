import Rate from "rc-rate";
import "rc-rate/assets/index.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../utils/productContext";

function DeleteCard({ stadion }) {
        const {setCartStadions, cartStadions} = useContext(ProductContext);
        const onDeleteCart = (e)=>{
          const newArray = cartStadions.filter((item)=> item.id !== stadion.id)
          setCartStadions(newArray)  
        }
        return (
          
            <div className="max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 border-2 border-indigo-200">
              <div className="p-4">
              <Link to={`/stadium/${stadion.id}`}>
                <img
                  className=" aspect-4/3 object-cover"
                  src={stadion.imageURL}
                  alt="product image"
                />
              </Link>
              </div>
              <div className="px-5 pb-5">
                <a href="#">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {stadion.title}
                  </h3>
                </a>
                <Rate
                  count={5}
                  disabled={true}
                  defaultValue={stadion.rating}
                  allowHalf={true}
                />
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    ${stadion.price}
                  </span>
                  <button
                    onClick={onDeleteCart}
                    className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Delete card
                  </button>
                </div>
              </div>
            </div>
     );
}

export default DeleteCard;