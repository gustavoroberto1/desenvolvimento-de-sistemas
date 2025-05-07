'use client'

import Link from "next/link";
import './home.css';
import { Person } from "@/components/Person";
import { useState } from "react";

export default function Home() {
  const [contador, setContador] = useState(0);
  const [pessoas, setPessoas] = useState([
    {
      nome: "Gustavo",
      idade: 27,
    },
    {
      nome: "Maria",
      idade: 30,
    },
    {
      nome: "João",
      idade: 30,
    }
  ])


  function aumentarContador(){
   setPessoas([...pessoas, { nome: "Pedrinh", idade: 30 }])
  }

  return (
    <div>
      <h1>Home</h1>
      <Link href="/login">LOGIN</Link>
      <br />
      <br />
      <br />


      <button onClick={aumentarContador}>ADICIONAR</button>
      <h1>{contador}</h1>

      <div className="container">
        {pessoas.map(item => (
          <Person key={item.nome} nome={item.nome} idade={item.idade} />
        ))}
      </div>

    </div>
  );
}
