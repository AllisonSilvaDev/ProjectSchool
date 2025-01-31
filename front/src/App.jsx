import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'

// const browserRouter = createBrowserRouter(createRoutesFromElements(

//   <Route path='/' >
//     <Route index element={""} />
//   </Route>
// ))


export default function Login (){

  return (
    <div className='container'>
      <h1>Login</h1>
      <input type="text" placeholder='User' className='caixa'/>
      <input type="password" placeholder='Password' className='caixa'/>
    </div>
  )
}
