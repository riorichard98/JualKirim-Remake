//component yang diimport
import { Nav } from "react-bootstrap";

//module yang diimport
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

// sidebar yang ada di sebelah kiri
export default function SideBar() {
  
  //state currentpage dipakai agar setiap page yang dipilih styling tombol berubah
  const {currentPage} = useSelector((state) => {
    return state.globalReducer
  })

  return (
    <div className="border border-5">
      <Nav className="d-flex flex-column" style={SideBarStyle}>
        {/**dikasih ternary agar setiap tombol stylingnya berubah ketika page berpindah */}
        <Link to="bantu-jual/kreator" style={currentPage == 'BantuJualPage'? {...DefaultLinkStyle,"backgroundColor" : "#e52b50","color" : "white"} : DefaultLinkStyle}>
          BANTU JUAL
          </Link>
        <Link to="AWB" style={currentPage == 'AWBPage'? {...DefaultLinkStyle,"backgroundColor" : "#e52b50","color" : "white"} : DefaultLinkStyle}>
          GENERATE AWB
          </Link>
        <Link to="cek-tarif" style={currentPage == 'CekTarifPage'? {...DefaultLinkStyle,"backgroundColor" : "#e52b50","color" : "white"} : DefaultLinkStyle}>
          CEK TARIF
          </Link>
      </Nav>
      <Outlet />
    </div>
  )
}

// hanya styling bisa diabaikan dibawah ini!!!

// styling sidebar
const SideBarStyle = {
  "height" : window.innerHeight - 90, // menggunakan window untuk mendapatkan ukuran resolusi layar dan responsive
  "width" : 0.144*window.innerWidth,
  "padding" : "20px"
}

//styling link/tombol - tombol yang ada di sidebar
const DefaultLinkStyle = {
  "textDecoration": "none",
  "borderStyle": "solid",
  "borderWidth" : "6px" ,
  "borderColor" : "#e52b50",
  "borderRadius" : "9px",
  "marginBottom" : "5%",
  "height":"50px",
  "padding":"7px",
  "color" : "black",
  // "background-color" : "#e52b50",
  "fontSize" : "15px",
  "fontWeight" : "bold"
}