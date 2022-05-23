import { Routes, Route } from 'react-router-dom'
import './App.css';
import BantuJualPage from './pages/BantuJualPage.js'
import CekTarifPage from './pages/CekTarifPage.js'
import AWBPage from './pages/AWBPage.js';
import KreatorPage from './pages/KreatorPage.js'
import PermintaanPage from './pages/PermintaanPage.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/bantu-jual" element={<BantuJualPage></BantuJualPage>} >
          {/* <Route path="/kreator" element={<KreatorPage></KreatorPage>} />
          <Route path="/permintaan" element={<PermintaanPage></PermintaanPage>} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
