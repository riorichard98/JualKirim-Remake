//module yang diimport
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export default function CekTarifPage(){
  const dispatch = useDispatch()

  //setiap page di akses state current page diubah
  useEffect(() => {
    dispatch({type:'changingPage',payload:'CekTarifPage'})
  }, [])
  return(
    <div>
      ini cek tarif page
    </div>
  )
}