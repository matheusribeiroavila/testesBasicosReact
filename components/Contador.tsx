'use client'

import { useContext, useEffect, useState } from "react"
import { Button } from "./Button";
import { ValorContadorGlobal } from "./ValorContadorGlobal";
import { ContadorContext } from "@/context/ContadorContext";

export const Contador = () => {
    
    const {contador, setContador} = useContext(ContadorContext)
    const [coisa, setCoisa] = useState("")

    useEffect(()=>{
        console.log("Contador ou coisa atualizado!")
    }, [contador, coisa]);

    return (
        <div>
            <h2 className="text-2xl">Contador</h2>
            <ValorContadorGlobal/>
            <div className="mt-2 flex gap-3 flex-wrap">
                <Button
                    onClick={() => {
                        setContador((c) => c-3)
                    }}>-3</Button>
                <Button 
                    onClick={() => {
                        setContador((c) => c-1)
                    }}>-1</Button>
                <Button 
                    onClick={() => {
                        setContador((c) => c+1)
                    }}>+1</Button>

                <Button 
                    onClick={() => {
                        setContador((c) => c+3)
                    }}>+3</Button>
            </div>
            <div className="flex flex-row  gap-2 mt-3">
                <input className="border border-gray-200 rounded px-2 py-1" value={coisa} onChange={(e) => {setCoisa(e.target.value)}} />
                <Button
                    onClick={() => {
                        setCoisa("")
                    }}>Limpar</Button>
            </div>
        </div>
    )
}