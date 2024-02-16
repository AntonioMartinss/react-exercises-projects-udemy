import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import "./Product.css"

const Product = () => {
    // 4 - Rota dinâmica
    const {id} = useParams()

    // 5 - carregando dado individual
    const url = "http://localhost:3000/products/" + id;

    const {data: product, loading, error} = useFetch(url)
    

  return (
    <>
    <p>ID do produto: {id}</p>
    {error && <p>Ocorreu um erro...</p>}
    {loading && <p>Carregando dados...</p>}
    {product && (<div>
      <h2>Nome: {product.name}</h2>
      <h4>Preço: {product.price}</h4>
      <img src={product.image} />
      <Link to={`/products/${product.id}/info`}>Mais informações</Link>
      </div>)
    }
    </>
  )
}

export default Product