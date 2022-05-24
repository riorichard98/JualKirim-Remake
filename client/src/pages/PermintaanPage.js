//module yang diimport
import "bootstrap/dist/css/bootstrap.min.css";

export default function AWBPage(){
  return(
    <div className="border border-2 rounded p-4" style={PermintaanPageStyle}>
      ini permintaan page
    </div>
  )
}


const PermintaanPageStyle = {
  "overflow-y": "auto",
  "height": window.innerHeight - 200,
  "width": 0.8 * window.innerWidth
}