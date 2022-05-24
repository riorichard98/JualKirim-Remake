//module yang diimport
import "bootstrap/dist/css/bootstrap.min.css";

//logo yang diimport
import LogoJualKirim from '../assets/logo-navbar-jualkirim.png'

export default function NavBar(){
  return (
    <div className="d-flex " style={NavBarStyle}> 
    <img style={{"marginLeft":"60px"}} src={LogoJualKirim}></img>
    </div>
  )
}

//style untuk navbar 
const NavBarStyle = {
  "backgroundColor" : "#bd454f",
  "height": "80px"
}

