//module yang diimport
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export default function AWBPage(){
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type:'changingPage',payload:'CekTarifPage'})
  }, [])
  return(
    <div>
      ini cek tarif page
    </div>
  )
}