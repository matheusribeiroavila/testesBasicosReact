'use client'

import { ContadorContext } from "@/context/ContadorContext"
import { useContext } from "react"
import { Button } from "./Button"
import { ValorContadorGlobal } from "./ValorContadorGlobal"

export const ContadorGlobal = () => {
    const {setContador} = useContext(ContadorContext)

    return (
        <div>
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
        </div>
    )
}