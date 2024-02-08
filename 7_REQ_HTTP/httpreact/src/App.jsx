import { useState, useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/products"
function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // 1 - resgatando dados

  useEffect(() => {
    // requisição com fetch then

    // fetch(url).then((response)=> {
    //   response.json().then((data) =>{
    //     setProducts(data)
    //   })
    // })

    // requisição com await async

    async function fetchData() {
      const res = await fetch(url);

      const data = await res.json()

      setProducts(data)
    }
    fetchData()
  }, [])

  // 2 - add products

   const handleSubmit = async (e) => {
     e.preventDefault();

    const product = {
      name,
      price
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        // Como estamos enviando/trafegando dados em formato JSON, utilizamos...
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    })
    

   }

  return (
    <>
      <div className="App">
        <h1>Lista de produtos:</h1>
        <ul>
          {products.map((product) => (
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
