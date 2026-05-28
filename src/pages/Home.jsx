import { useContext } from 'react'
import Navbar from '../components/Navbar'
import { GlobalContext } from '../contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


function Home() {
    const{ usuario, anoDacopa, jogadorDoDia, setJogadorDoDia, jogadores} = useContext(GlobalContext)
    const navigate = useNavigate()
function mudarJogador() {
let novoJogador = prompt ("Quem vai ser?")
setJogadorDoDia (novoJogador)
}
   
  return (
    <div className='container-home'>
        <Navbar />
        <h1>Copa do Mundo</h1>
        <p>Usuário: {usuario}</p>
        <p>copa do mundo {anoDacopa}</p>
       <div>
         <h2>{jogadorDoDia}</h2>
         <button onClick={mudarJogador}>😶‍🌫️</button>
         <img src={jogadores[0].imagem}/>
       </div>
    </div>
  )
}

export default Home