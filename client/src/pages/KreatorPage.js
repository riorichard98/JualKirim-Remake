//module yang diimport
import "bootstrap/dist/css/bootstrap.min.css";

export default function KreatorPage() {
  return (
    <div className="border border-2 rounded p-4" style={KreatorPageStyle}>

      <div className="d-flex">
        <input className="form-control" style={{"width":"15%","height":"40px","marginRight":"52%"}} placeholder="Search" type="text"/>
        <select style={{"width":"15%","height":"40px","marginRight":"20px"}} className="form-select">
        <option style={{"display":"none"}}>Langganan</option>
          <option>Free</option>
          <option>15000</option>
        </select>
        <select style={{"width":"15%","height":"40px"}} className="form-select">
        <option style={{"display":"none"}}>Category</option>
          <option>test 1</option>
          <option>test 2</option>
        </select>
      </div>

      <div>

      </div>

    </div>
  )
}

const KreatorPageStyle = {
  "overflow-y": "auto",
  "height": window.innerHeight - 200,
  "width": 0.8 * window.innerWidth
}