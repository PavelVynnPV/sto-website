import React, {useEffect, useState} from "react"
import AppRoutes from "./AppRoutes";

function App() {
  const [href, setHref] = useState('http://localhost:3000/')
 
  useEffect(() => {
    let windowHref = window.location.href
    setHref(windowHref)
  },[])
  
  return (
   <>
   <AppRoutes href={href}/>
   </>
  );
}

export default App;
