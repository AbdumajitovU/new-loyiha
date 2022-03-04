import axios from "axios";
import { useEffect, useState } from "react";
import { BallTriangle, MutatingDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import ProductCard from "../components/productCard";

function Homepage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(()=>{
      axios
      .get("http://localhost:3000/products")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    },2000)
  
  }, []);

  return (
    <>
    {data.length > 0 ? 
      <Layout>
      <div className="flex justify-between px-8 md:px-0 sm:px-4 my-8">
        <h1 className="text-xl md:text-4xl text-indigo-700">Premium Stadiums</h1>
        <Link
          className="text-white bg-indigo-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          to={"/stadium/create"}
        >
          Create
          <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 px-10 sm:px-8 md:px-0">
        {data.map((stadion) => {
          return (
            <ProductCard
              key={stadion.id}
              stadion={stadion}
            />
          );
        })}
      </div>
      </Layout> 
      :
      <div className="flex h-screen justify-center items-center">
     <MutatingDots
     heigth="100"
     width="100"
     color='red'
     ariaLabel='loading'/>
      </div>
  }
    </>
  );
}

export default Homepage;