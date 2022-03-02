import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import MyInput from "../components/myInput";

function StadiumUpdate() {
    const [titleInp, setTitleInp] = useState("");
    const [capacityInp, setCapacityInp] = useState("");
    const [locationInp, setLocationInp] = useState("");
    const [imageInp, setImageInp] = useState("");
    const [openedInp, setOpenedInp] = useState("");
    const [priceInp, setPriceInp] = useState("");
    const [ratingInp, setRatingInp] = useState("");
    const [cnameInp, setCnameInp] = useState("");
    const [ratingErr, setRatingErr] = useState("");
    const [priceErr, setPriceErr] = useState("");
    const [capacityErr, setCapacityErr] = useState("");
    const [titleErr, setTitleErr] = useState("");
    const [locationErr, setLocationErr] = useState("");
    const [imageErr, setImageErr] = useState("");
    const [openedErr, setOpenedErr] = useState("");
    const [clubErr, setClubErr] = useState("");
    
    let params = useParams();
    let navigate = useNavigate();
  
    useEffect(()=>{
        axios
        .get(`http://localhost:3000/products/${params.banana}`)
        .then(function (response) {
          setTitleInp(response.data.title);
          setCapacityInp(response.data.capacity)
          setLocationInp(response.data.location)
          setImageInp(response.data.imageURL)
          setOpenedInp(response.data.opened)
          setPriceInp(response.data.price)
          setRatingInp(response.data.rating)
          setCnameInp(response.data.club.name)
        })
        .catch(function (error) {
          console.log(error);
        });
      },[])

    const onCreate = (e) => {
      e.preventDefault();
      
      if((ratingInp<1 || ratingInp>5 || ratingInp==="") ||  (capacityInp<1000 || capacityInp>100000 || capacityInp==="" ) || 
       (priceInp<1 || priceInp>10000000000 || priceInp==="") ||titleInp==="" || imageInp==="" || cnameInp==="" || locationInp==="" || openedInp==="" ){
        
        if(ratingInp===""){
          setRatingErr("Iltimos ratingni korsating")
        }
        else if(ratingInp>5 || ratingInp<1){
          setRatingErr("rating 1 va 5 oraligida bola oladi")
        }
  
        if(priceInp===""){
          setPriceErr("Iltimos narxni korsating")
        }
        else if(priceInp<1 || priceInp>10000000000) {
          setPriceErr("Notogri narx korsatildi")
        }
  
        if(capacityInp===""){
          setCapacityErr("Iltimos o'rindiqlar sonini korsating")
        }
        else if(capacityInp<1000 || capacityInp>100000){
          setCapacityErr("Orindiqlar soni notogri korsatildi")
        }
  
        if(titleInp===""){
          setTitleErr("Iltimos nomni korsating")
        }
  
        if(locationInp===""){
          setLocationErr("Iltimos manzilni korsating")
        }
        if(imageInp===""){
          setImageErr("Iltimos rasm linkini korsating")
        }
        if(openedInp===""){
          setOpenedErr("Iltimos ochilish sanasini korsating")
        }
        if(cnameInp===""){
          setClubErr("Iltimos ochilish sanasini korsating")
        }
  
        return
      }


       axios.put(`http://localhost:3000/products/${params.banana}`, {
        imageURL: imageInp.trim(),
        title: titleInp.trim(),
        capacity: capacityInp,
        location: locationInp.trim(),
        opened: openedInp.trim(),
        price: priceInp,
        rating: ratingInp,
        club: {
          name: cnameInp.trim()
        }
    })
      .then(function (response) {
        navigate("/")
      })
      .catch(function (error) {
        console.log(error);
      });
    };

    return ( 
        <Layout>
        <form className=" max-w-3xl mx-auto shadow border p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
          <MyInput
            labelText={"Title"}
            myValue={titleInp}
            mySetValueChange={setTitleInp}
            type={"text"}
          />
          {titleErr && <p className="text-red-500">{titleErr}</p>}
          </div>
          <div>
          <MyInput
            labelText={"Capacity"}
            myValue={capacityInp}
            mySetValueChange={setCapacityInp}
            type={"number"}
          />
          {capacityErr && <p className="text-red-500">{capacityErr}</p>}
          </div>
          <div>
          <MyInput
            labelText={"Location"}
            myValue={locationInp}
            mySetValueChange={setLocationInp}
            type={"text"}
            />
            {locationErr && <p className="text-red-500">{locationErr}</p>}
          </div>
          <div>
          <MyInput
            labelText={"Image URL"}
            myValue={imageInp}
            mySetValueChange={setImageInp}
            type={"text"}
          />
          {imageErr && <p className="text-red-500">{imageErr}</p>}
          </div>
          <div>
          <MyInput
            labelText={"Opened Date"}
            myValue={openedInp}
            mySetValueChange={setOpenedInp}
            type={"text"}
          />
          {openedErr && <p className="text-red-500">{openedErr}</p>}
          </div>
          <div>
          <MyInput
            labelText={"Price"}
            myValue={priceInp}
            mySetValueChange={setPriceInp}
            type={"number"}
          />
          {priceErr && <p className="text-red-500">{priceErr}</p>}
          </div>
        <div>
          <MyInput
            labelText={"Rating"}
            myValue={ratingInp}
            mySetValueChange={setRatingInp}
            type={"number"}
          />
           {ratingErr && <p className="text-red-500">{ratingErr}</p>}
        </div>
        <div>
        <MyInput
            labelText={"Club Name"}
            myValue={cnameInp}
            mySetValueChange={setCnameInp}
            type={"text"}
          />
          {clubErr && <p className="text-red-500">{clubErr}</p>}
        </div>
  
          <div className="flex justify-end md:col-span-2">
            <button
              onClick={onCreate}
              className="px-4 py-2  w-full rounded bg-indigo-700 text-white"
            >
              Update
            </button>
          </div>
        </form>
      </Layout>
     );
}

export default StadiumUpdate;