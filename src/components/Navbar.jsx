import { Link } from "react-router-dom"
import './Navbar.css'
function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Estadios">Estadios</Link>
        <Link to="/jogadores">jogadores</Link>
        <Link to="/jogos">jogos</Link>
        <Link to="/selecoes">selecoes</Link>
    </nav>
  )
}

export default Navbar
