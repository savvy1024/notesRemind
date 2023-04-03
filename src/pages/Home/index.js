import React, { useEffect } from "react";
import List from "./components/List";
import Edit from "./components/Edit";
import "./index.css";
import { useState } from "react";
import { API_GET_DATA } from "../../global/constants";
import { useRef } from "react";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const {data}  = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({data})
  });
  
  
}

console.log(API_GET_DATA)

const Home = () => {
  const [data, setData] = useState([]);
  const setDataSituation = useRef(false);

  useEffect(() => {
    if(!setDataSituation.current){
      return;
    }
    fetchSetData(data).then(() => {
      setDataSituation.current = false
    });
  }, [data])



  useEffect(() => {
    fetchData(setData);
      // fetch("http://localhost:3004/posts/1")
      // .then((res) => res.json())
      // .then(({data}) => setData(data))
      // .catch((err) => console.log(err));
      
  
  },[]);

  console.log(data); 
 
  return (
    <div className='m-auto bg-zinc-400 text-xl p-10 w-1/3 shadow-2xl rounded-lg'>
      <Edit add={setData} setDataSituation={setDataSituation}/>
      <List listData={data} deleteData={setData} setDataSituation={setDataSituation}/>
      
    </div>
  );
};
   
export default Home;
