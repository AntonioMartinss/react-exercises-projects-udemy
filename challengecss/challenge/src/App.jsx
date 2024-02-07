import './App.css'
import CarDetais from './components/CarDetais'


function App() {
  const cars = [
    { id: 1, brand: "VW", color: "purple", engine: "1.3" },
    { id: 2, brand: "GM", color: "red", engine: "2.6 TURBO" },
    { id: 3, brand: "Fiat", color: "blue", engine: "1.0 FLEX" },
    { id: 4, brand: "Grumman F-14", color: "gray", engine: "GE F100 PW 119" }
  ]
  return (
    <>
      <h1>Detalhes de carros</h1>
      
      <div className="repart"></div>

      {cars.map((car) => (
        <CarDetais
          key={car.id}
          brand={car.brand}
          color={car.color}
          engine={car.engine}
        />
      ))}



    </>
  )
}

export default App
