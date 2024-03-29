import { useState,useEffect } from "react";
import Pages from "./Components/Pages";

function App() {
  const [data,setData]= useState([])
  useEffect(()=>{
    const paginationFunc= async ()=>{
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const data = await res.json()
      setData(data)
      console.log(data)
    }
    paginationFunc()
  },[])
  return (
    <>
  {
data.length > 0 ? <Pages data={data}/> : <p>Loading....</p>
}
      
    </>
  );
}

export default App;
