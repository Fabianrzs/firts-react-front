import React from 'react'

/* const Routes = lazy(() => import("./Routes")); */
export default function App() {
  const hola = () => {
    return (<h1>Hola Mundo</h1>)
  }
  return (
    <div>
      {hola()}
    </div>
  )
}
