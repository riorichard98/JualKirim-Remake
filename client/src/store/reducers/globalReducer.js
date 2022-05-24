// digunakan sebagai state global untuk menentukan state page saat ini , state sudah login atau belum

const initialState = {
  isLogin: false,
  currentPage: false,
}

const reducer = (state = initialState, action) => {
  if (action.type === 'changingPage') { // changingPage akan digunakan setiap page yag diakses berubah
    return { ...state, currentPage: action.payload }
  }
  return state
}

export default reducer