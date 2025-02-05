import React, { useState, useEffect } from "react";
import { use } from "react";


export default function Home(){

    const token = localStorage.getItem('token')
    console.log("Token Home: ", token)

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('http://127.0.0.1:8000/api/professores',
                    {
                        Headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
            } catch (error){
                console.log(error)
            }
        }

    }, [])

    return (
        <>
            <h1>Pagina Home</h1>
        </>
    )
}