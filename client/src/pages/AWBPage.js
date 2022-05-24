//module yang diimport
import { useDispatch } from "react-redux"
import { useEffect } from "react"

export default function AWBPage() {
  const dispatch = useDispatch()

  //setiap page di akses state current page diubah
  useEffect(() => {
    dispatch({type:'changingPage',payload:'AWBPage'})
  }, [])
  return (
    <div>
      ini awb page
    </div>
  )
}