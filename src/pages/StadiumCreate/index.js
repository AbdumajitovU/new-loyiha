import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import MyInput from "../components/myInput"

function StadiumCreate() {
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

  let navigate = useNavigate();

  const onCreate = (e) => {
    e.preventDefault();
    if(ratingInp>5 || ratingInp<1){
      setRatingErr("rating 1 va 5 oraligida bola oladi")
    }

    if(priceInp<10000 || priceInp>10000000000){
      setPriceErr("Notogri narx korsatildi")
    }

    
    if(capacityInp<10000 || capacityInp>100000){
      setCapacityErr("Orindiqlar soni notogri korsatildi")
    }

    if(ratingErr || priceErr || capacityErr){
      return
    }

    axios.post(`http://localhost:3000/products`, {
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
      <form className=" max-w-3xl mx-auto shadow border p-8 space-y-8">
        <MyInput
          labelText={"Title"}
          myValue={titleInp}
          mySetValueChange={setTitleInp}
          type={"text"}
        />
        <div>
        <MyInput
          labelText={"Capacity"}
          myValue={capacityInp}
          mySetValueChange={setCapacityInp}
          type={"number"}
        />
        {capacityErr && <p className="text-red-500">{capacityErr}</p>}
        </div>
        <MyInput
          labelText={"Location"}
          myValue={locationInp}
          mySetValueChange={setLocationInp}
          type={"text"}
        />
        <MyInput
          labelText={"Image URL"}
          myValue={imageInp}
          mySetValueChange={setImageInp}
          type={"text"}
        />
        <MyInput
          labelText={"Opened Date"}
          myValue={openedInp}
          mySetValueChange={setOpenedInp}
          type={"text"}

        />
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
        <MyInput
          labelText={"Club Name"}
          myValue={cnameInp}
          mySetValueChange={setCnameInp}
          type={"text"}
        />

        <div className="flex justify-end">
          <button
            onClick={onCreate}
            className="px-4 py-2 rounded bg-indigo-700 text-white"
          >
            Create
          </button>
        </div>
      </form>
    </Layout>
  );
}

export default StadiumCreate;
