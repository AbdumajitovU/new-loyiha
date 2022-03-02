import { useState } from "react";

function MyInput({ labelText, myValue, mySetValueChange, type}) {
  const [inpValue, setInpValue] = useState();

  const onInpValueChange = (e) => {
    mySetValueChange(e.target.value);
  };

  return (
    <div>
      <label className="text-xl text-indigo-500" htmlFor="inputFor">
        {labelText}:
      </label>
      <input 
        onChange={onInpValueChange}
        value={myValue}
        type={type}
        id="inputFor"
        className="form-input w-full border-2 rounded p-2 text-indigo-500 focus:border-blue-500" 
      />
    </div>
  );
}

export default MyInput;
