import { useState, useEffect } from 'react'
import './App.css'

//  4 - custom hook

import { useFetch } from './hooks/useFetch'


const url = "http://localhost:3000/products"
function App() {
  const [products, setProducts] = useState([])


  // 4 - custom hook

  const { data: items, httpConfig } = useFetch(url);

 
 

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados

  // useEffect(() => {
  //   // requisição com fetch then

  //   // fetch(url).then((response)=> {
  //   //   response.json().then((data) =>{
  //   //     setProducts(data)
  //   //   })
  //   // })

  //   // requisição com await async

  //   async function fetchData() {
  //     const res = await fetch(url);

  //     const data = await res.json()

  //     setProducts(data)
  //   }
  //   fetchData()
  // }, [])

  // 2 - add products

   const handleSubmit = async (e) => {
     e.preventDefault();

    const product = {
      name,
      price
    }

    // const res = await fetch(url, {
    //   method: 'POST',
    //   headers: {
    //     // Como estamos enviando/trafegando dados em formato JSON, utilizamos...
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(product),
    // })
    
    // // 3 - carregamento dinâmico

    // // não podemos usar o res diretamente pois é uma string em JSON, mas podemos transforma-lo
    // // em um objeto JS desta seguinte forma...
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

// !!! Comentamos a parte de cima pois fizemos na aula 5 - refatorando POST no hook useFetch !!!

// 5 - refatorando POST

  httpConfig(product, "POST")

    setName("");
    setPrice("");
   }

  return (
    <>
      <div className="App">
        <h1>Lista de produtos:</h1>
        <ul>

          {/* 4- custom hook - utilizamos o items && como um IF, já que no nosso  hook ele inicializa como 
          null, esta verificação serve para ver se é um array, um valor ou existam, caso sim, ele executa
          a função normalmente*/}
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - R$ {product.price}</li>
          ))}
        </ul>
        <div className="add-product">
          <form  onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
              Preço:
              <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <input type="submit" value="Criar novo produto!" />
          </form>
        </div>
      </div>
    </>
  )
}

export default App
