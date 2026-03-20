import React, { useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
export default function About (){
  const [searchParams,setSearchParams] =useSearchParams();
  console.log(searchParams);
  const location=useLocation();
  // useEffect((searchParams) => {
  //   setSearchParams({...searchParams,tag:"newTag"}
  //   )
  // },[location.pathname]);
  console.log(searchParams);
  console.log("pathname :",location.pathname.split("/").at(-1));
  console.log("search :",location.search);
  console.log("Hash :",location.hash);
  console.log("Key :",location.key);
  console.log("State :",location.state);

  return (
    <div>About</div>
  )
}