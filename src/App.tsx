import { useState } from 'react'
import TLDrawDemo from './components/TLDrawDemo'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TLDrawDemo />
  },
])

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
