'use client'
import "./Styles.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function login(){
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const rouper = useRouter();

    function handleSubmit(){
        console.log(email)
        console.log(password)

      //  exemplo requisicã
       // const respose = await fetch("http://meu-dominio/login",){
       //     method: "post",
       //     body: {
        //        email,
       //         password
        //    }as any,
      //  }

    }
    return (
        <div className="container">
            <div className="form">
                <h2>LOGIN</h2>
                <input 
                      type="text"
                      placeholder="E-mail"
                      className="input"
                      value={email}
                      onChange={(event)=> setEmail(event.target.value)}
                />
                <input 
                      type="password" 
                      placeholder="Password" 
                      className="input"
                      value={password}
                      onChange={(event)=> setPassword(event.target.value)}

                />
                <button className="button"
                onClick={handleSubmit}
                disabled={!email || !password}>
                   Entrar
                </button>
            </div>
        </div>
        
    )
}