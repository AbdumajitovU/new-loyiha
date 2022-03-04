import { Routes, Route, useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { tickIcon } from "../../utils/icons";
import Rate from "rc-rate";
import Layout from "../components/Layout";
import { MutatingDots } from "react-loader-spinner";

function StadiumDetail() {
  let params = useParams();
  const [data, setData] = useState(null);
  const [del, setDel] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
   setTimeout(()=>{
    axios
    .get(`http://localhost:3000/products/${params.banana}`)
    .then(function (response) {
      setData(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
   },2000)
  }, []);

  const onDelete = () => {
  axios.delete(`http://localhost:3000/products/${params.banana}`)
    .then(() => {
      navigate("/")
    })
    .catch(() => {
      alert("Iltimos qayta urinib koring")
    });
  };



  return (
    <>
    {data ? 
    <Layout>
      <div className=" max-w-5xl mx-auto relative">
        {data && (
          <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-lg">
                <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
                  {data.title}
                </h1>

                <div className="mt-8 space-y-5">
                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    {tickIcon}

                    <span className="mx-2">{data.club.name}</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    {tickIcon}

                    <span className="mx-2">{data.location}</span>
                  </p>

                  <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
                    {tickIcon}

                    <span className="mx-2">
                      {data.capacity} ta odam sig`adi
                    </span>
                  </p>
                </div>
              </div>
              <div className="my-4 text-red-500">
                <Rate
                  count={5}
                  disabled={true}
                  defaultValue={data.rating}
                  allowHalf={true}
                />
              </div>
              <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
                <form className="flex flex-col lg:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                  />

                  <button
                    type="button"
                    className="h-10 px-4 py-2 m-1 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400"
                  >
                    Join Us
                  </button>
                </form>
              </div>
              <div className="flex space-x-6"> 
                <Link to={`/stadium/update/${params.banana}`} className="my-6 px-4 py-2 bg-red-100 text-amber-500 border-2 border-amber-500 rounded font-semibold">Update</Link>
                <button onClick={()=>{setDel(true)}}  className="my-6 px-4 py-2 bg-red-100 text-red-500 border-2 border-red-500 rounded font-semibold">Delete</button>
              </div>
            
            {del && 
            <div className="absolute inset-0 bg-opacity-50 bg-gray-300">
            <div className="max-w-sm md:max-w-lg fixed top-40 left-7 md:fixed md:top-1/4 md:left-1/3 flex flex-col justify-center items-center py-10 px-20  bg-white rounded-lg shadow-xl border-2 border-red-700 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
              <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <h3 class="mb-5 text-lg text-center font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>                 <div className="flex mt-4 space-x-6 lg:mt-6">
                   <button onClick={onDelete} data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">Yes, I'm sure</button>
                   <button onClick={()=>{setDel(false)}} data-modal-toggle="popup-modal" type="button" class="text-gray-500 border-2 border-indigo-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">No, cancel</button>
               </div>
               </div>
             </div>
          </div>
            }
            
            </div>

    
            <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
              <img
                className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
                src={data.imageURL}
                alt="glasses photo"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
    :
     <div className="flex h-screen justify-center items-center">
     <MutatingDots
     heigth="100"
     width="100"
     color='red'
     ariaLabel='loading'/>
   </div>}
   </>
  );
}

export default StadiumDetail;





