import { Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

// sidebar yang ada di sebelah kiri
export default function SideBar() {
  return (
    <div className="border border-5">
      <Nav className="d-flex flex-column" style={SideBarStyle}>
        <Link to="bantu-jual/kreator" style={DefaultLinkStyle}>BANTU JUAL</Link>
        <Link to="AWB" style={DefaultLinkStyle}>GENERATE AWB</Link>
        <Link to="cek-tarif" style={DefaultLinkStyle}>CEK TARIF</Link>
      </Nav>
      <Outlet />
    </div>
  )
}

// styling sidebar
const SideBarStyle = {
  "height" : window.innerHeight - 90, // menggunakan window untuk mendapatkan ukuran resolusi layar dan responsive
  "width" : 0.144*window.innerWidth,
  "padding" : "20px"
}

//styling link/tombol - tombol yang ada di sidebar
const DefaultLinkStyle = {
  "text-decoration": "none",
  "border-style": "solid",
  "border-width" : "6px" ,
  "border-color" : "#e52b50",
  "border-radius" : "9px",
  "margin-bottom" : "5%",
  "height":"50px",
  "padding":"7px",
  "color" : "white",
  "background-color" : "#e52b50",
  "font-size" : "15px"
}