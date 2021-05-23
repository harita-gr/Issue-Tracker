import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
  } from '../constants/userTypes'

  export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST:
        return { ...state,loading: true }
      case USER_LOGIN_SUCCESS:
        return { ...state,loading: false, userInfo: action.payload ,isLoggedIn:true}
      case USER_LOGIN_FAIL:
        return { ...state,loading: false, error: action.payload }
      case USER_LOGOUT:
        return {...state,isLoggedIn:false}
      default:
        return state
    }
  }
  
  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST:
        return { ...state,loading: true }
      case USER_REGISTER_SUCCESS:
        return { ...state,loading: false, userInfo: action.payload,error:null }
      case USER_REGISTER_FAIL:
        return { ...state,loading: false, error: action.payload,userInfo:null }
      case USER_LOGOUT:
        return {}
      default:
        return state
    }
  }