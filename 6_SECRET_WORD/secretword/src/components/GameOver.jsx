import './GameOver.css'

const GameOver = ({retry,score, pickedWord}) => {
  return (
    <div>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuação foi: <span>{score}</span></h2>
        <h4>A palavra era: {pickedWord}</h4>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver