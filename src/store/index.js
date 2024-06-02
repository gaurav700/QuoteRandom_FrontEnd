import {configureStore} from "@reduxjs/toolkit";
import loginSlice from "./login-signup-slice";
import nicheSlice from "./niche-slice";


const quoteStore = configureStore({
  reducer :{ 
    loginSignup : loginSlice.reducer,
    niche : nicheSlice.reducer
  }
})

export default quoteStore;