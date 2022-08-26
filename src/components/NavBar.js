import { Link } from 'react-router-dom'
import logo from "../images/flatbaselogo.png"

const NavBar = () => {

  return(
    <div>
      <Link to='/'><img src={logo} alt='dnd-flatbase logo'/></Link>
    </div>
  )
}

export default NavBar