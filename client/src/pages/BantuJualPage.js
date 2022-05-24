//module yang diimport
import { Link, Outlet, Routes ,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux"
import { useEffect } from "react"

// pages yang diimport
import KreatorPage from './KreatorPage.js'
import PermintaanPage from './PermintaanPage.js'


export default function AWBPage() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type:'changingPage',payload:'BantuJualPage'})
  }, [])

  return (
    <div>
      ini BantuJualPage
      <nav>
        <Link to="kreator">kreator</Link>
        <Link to="permintaan">permintaan</Link>

      </nav>
      <Routes>
        <Route index path="kreator" element={<KreatorPage/>} />
        <Route path="permintaan" element={<PermintaanPage/>} />
      </Routes>
      <Outlet />
    </div>
  )
}