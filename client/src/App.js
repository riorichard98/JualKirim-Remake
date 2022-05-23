//module yang diimport
import { Routes, Route } from 'react-router-dom'
import './App.css';

// pages yang diimport
import BantuJualPage from './pages/BantuJualPage.js'
import CekTarifPage from './pages/CekTarifPage.js'
import AWBPage from './pages/AWBPage.js'; 
import IdentifyRoute from './helpers/identifyRoute';



function App() {
  return (
    <div className="App">
      <Routes>

        {/* identifyRoute agar setiap user mengakses tanpa params akan langsung di redirect ke /bantu-jual */}
        <Route path="/" element ={<IdentifyRoute/>}/> 

        {/** bantu jual memiliki child page yaitu /kreator dan /permintaan  */}       
        <Route path="/bantu-jual/*" element={<BantuJualPage/>} />

        <Route path="/cek-tarif" element={<CekTarifPage/>} />
        <Route path="/AWB" element={<AWBPage/>} />
      </Routes>
    </div>
  );
}

export default App;
