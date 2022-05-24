//module yang diimport
import { Routes, Route } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"; //css bootstrap

// pages yang diimport
import BantuJualPage from './pages/BantuJualPage.js'
import CekTarifPage from './pages/CekTarifPage.js'
import AWBPage from './pages/AWBPage.js';
import IdentifyRoute from './helpers/identifyRoute';

// component yang diimport
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar> {/**merupakan komponen navbar yang ada diatas */}
      <div className="d-flex"> {/**d-flex agar masing2 page ada disebelah kanan sidebar */}
        <SideBar></SideBar> {/**merupakan komponen sidebar yang ada disebelah kiri */}

        <div className="container mt-3 bg-danger"> {/**konten utama sebelah kanan , terdapat bantujual , cek tarif , awb page */}
        <Routes>

          {/* identifyRoute agar setiap user mengakses tanpa params akan langsung di redirect ke /bantu-jual */}
          <Route path="/" element={<IdentifyRoute />} />

          {/** bantu jual memiliki child page yaitu /kreator dan /permintaan  */}
          <Route path="/bantu-jual/*" element={<BantuJualPage />} />

          <Route path="/cek-tarif" element={<CekTarifPage />} />
          <Route path="/AWB" element={<AWBPage />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
