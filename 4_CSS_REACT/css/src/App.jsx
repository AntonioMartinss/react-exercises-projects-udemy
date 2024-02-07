import { useState } from 'react'

import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const n = 15;
  const [name] = useState("Antônio");
 const redTitle = true;
  return (
    <>
      {/* CSS global */}
      <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.jsx</p>
      {/* Inline CSS */}
      <p style={{
        color: "magenta",
        padding: "25px",
        borderTop: "2px solid red"
      }}>
        Este elemento foi estilizado em forma inline
      </p>
      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2
      style={
        name === "Antônio" ? ({color: "green", backgroundColor: "#000"}) : (null)

      }
      >
      Teste nome
      </h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica!!!</h2>
      {/* CSS Modules */}
      <Title/>
      <h2 className='my_title'>não pegou a estilização</h2>
    </>
  )
}

export default App
