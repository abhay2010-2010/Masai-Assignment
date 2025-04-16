import React, { useEffect, useState } from "react";

function Debouncing() {
  const [inp, setInp] = useState("");
  const[query,setQuery]=useState("")


  function handlechange(e) {
    e.preventDefault();
    setInp(e.target.value);
  }

  useEffect(()=>{
    let time=setTimeout(() => {
        setQuery(inp);
    }, 500);
    return ()=>clearInterval(time);
  },[inp])


    if(query){
        console.log("Debounce query is ",query);
        
    }


  return (
    <>
      <div>Debouncing</div>
      <input onChange={handlechange} type="text" name="search" id="" />
      <h1>{query}</h1>
    </>
  );
}

export default Debouncing;
