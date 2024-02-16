import { useState } from 'react'
import './App.css'

// 1 - config react router
import{BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'


// Components
import NavBar from './components/NavBar'
import SearchForm from './components/SearchForm'


function App() {
  

  return (
    <div className='App'>
      <h1>React Router</h1>
{/* Tudo que esta fora de BrowserRouter aparece nas outras paginas */}
      <BrowserRouter>
      {/* 2 - links com react router */}
      <NavBar/>
      {/* 9 - search */}
      <SearchForm/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
            {/* 6 -  nested route*/}
            <Route path='/products/:id/info' element={<Info/>}></Route>
          {/* 4 - rota dinâmica */}
          <Route path='/products/:id' element={<Product/>}></Route>
          {/* 9 - Search */}
          <Route path='/search' element={<Search/>}></Route>
          {/* 10 - redirect é utilizado por exemplo:
          antigamente neste site existia a aba /company ,mas hoje foi atualizada para /about.
          Para não corrermos o risco de perdermos clientes que eram acostumados a pesquisar por
          company, usamos o <Navigate to="/about"/> para nos redirecionar para a página nova...*/}
          <Route path='/company' element={<Navigate to="/about"/>}></Route>
          {/* 7 - No match route */}
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
