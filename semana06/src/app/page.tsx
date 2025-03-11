import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Person from "@/components/person";

export default function Home() {
  const lista = [
    {nome: "Rosane",
      age: 42},

      {
        nome: "Luiza",
        age: 23
      }
  ]
  return (
    <div>

      < h1>HELLO WORLD</h1>
      <h2>teste</h2>


      <Link href="/login">
        <button>login</button>
      </Link>
      <div>
        <div className= "contanier">
          {lista.map((item)=>( <Person nome={item.nome} idade={item.age} key={item.nome}/>
          ))}
          
        </div>

      </div>
    </div>
  );
}
