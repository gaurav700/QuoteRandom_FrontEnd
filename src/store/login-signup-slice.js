import { createSlice } from "@reduxjs/toolkit";


const loginSlice = createSlice({
  name : 'login',
  initialState : {
    isLogin : false,
    isSignup : false,
    isGenerate : false,
    login : false,
    loginUserId : null,
  },
  reducers:{
    login : (state)=>{
        state.isLogin = !state.isLogin;
        if(state.isSignup){
          state.isSignup = !state.isSignup
        }
    },
    signup : (state)=>{
      state.isSignup = !state.isSignup;
        if(state.isLogin){
          state.isLogin = !state.isLogin
        }
    },
    generate : (state)=>{
      state.isGenerate = !state.isGenerate;
    },
    home : (state)=>{
      state.isLogin = false;
      state.isSignup = false;
      state.isGenerate = false;
    },
    loginSuccess : (state, action)=>{
      state.login = !state.login
      state.loginUserId = (action.payload);
    },
    homeLogout : (state)=>{
      state.isLogin = false;
      state.isSignup = false;
      state.isGenerate = false;
      state.login = false;
      state.loginUserId = null;
    },
  }
});


export const loginActions = loginSlice.actions;

export default loginSlice;