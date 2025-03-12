'use client'

import Link from "next/link";
import Person from "@/components/person";
import "./home.css";
import { useState } from "react";

export default function Home() {
  //let contador = 0;
  const [contador, setContador] = useState<number>(0)
  
  function incrementar(){
    setContador(contador + 1);
  }
  
  function resetar(){
    setContador(0);
  }
  return (
    <div className="container">
      <h1>contador:{contador}</h1>
      <button onClick={()=>incrementar()}>incrementar </button>
      <button onClick={() => resetar()} >resetar</button>
    </div>

);
}



// const lista = [
   // {
   //   nome: "Rosane",
  //    age: 42
   // },

   // {
   //   nome: "Luiza",
   //   age: 23
    //}
// ]


   // <div>

     // < h1>HELLO WORLD</h1>
     // <h2>teste</h2>


     // <Link href="/login">
    //     <button>Home</button>
    //   </Link>
    //   <div>
    //     <div className= "contanier">
    //       {lista.map((item)=>( <Person nome={item.nome} idade={item.age} key={item.nome}/>
    //       ))}
          
    //     </div>

    //   </div>
    // </div>
