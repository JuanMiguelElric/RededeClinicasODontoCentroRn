import React, { useEffect, useState } from "react";

export default function SecundaryParty (){
    const [count,setCount]= useState(999856);
    useEffect(()=>{
       const interval = setInterval(()=>{
        setCount((prevCount)=> prevCount +1);
       },100)
       //limitar a contagem 
       if (count === 100000){
        clearInterval(interval)
       }
       return () => clearInterval(interval)
    }, [count]);

    return(
        <>
            <div className="container-fluid " style={{backgroundColor:'#002873'}}>

                 <div className="container text-white text-center" ><p>Mais de
                  <strong> {count} </strong> de procedimentos realizados. </p>
                 <div className="text-center">

                     <small >Um marco que transforma vidas e cuida do seu bem estar!</small>
                 </div>
                 </div>
            </div>
        </>
    )
}
