import axios from 'axios'
import {
    USER_LOGIN_FAIL,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
  } from '../constants/userTypes'

  //LOGIN
  export const loginRequest = () =>{
    return{
        type: USER_LOGIN_REQUEST,
              
    }
}

export const loginSucess = (userdetails) =>{
    return{
        type: USER_LOGIN_SUCCESS,
        payload:userdetails       
    }
}

export const loginFail = (error) =>{
    return{
        type: USER_LOGIN_FAIL,
        payload:error       
    }
}

export const loginUser = (userdetails) => {
    //recieves dispatch() as argument
    return function(dispatch) {
        let url="http://localhost:3001/users"
        dispatch(loginRequest())
        axios.get(url)
        .then(response => {
            const users = response.data
            console.log('Users',users)
            const userFound = users.find(user => {
               return user.email === userdetails.email                
            });
            if (userFound === undefined)
            {
                // console.log('Login Fail - User not found!')
                dispatch(loginFail('User not found!'))
            }
            else if( userFound.password !== userdetails.password){
                // console.log('Login Fail - Incorrect Password!')
                dispatch(loginFail('Incorrect Password!'))
            }
            else {
                localStorage.setItem('userInfo', JSON.stringify(userFound))
                // console.log('Login Success')
                localStorage.setItem('isLoggedIn',true)
                dispatch(loginSucess(userFound))
            }
        })
        .catch(response => {
            dispatch(loginFail('Login Failed! Please Try Again!'))
        })    
    }
}  


//REGISTER

export const registerRequest = () =>{
    return{
        type: USER_REGISTER_REQUEST,
              
    }
}

export const registerSucess = (userdetails) =>{
    return{
        type: USER_REGISTER_SUCCESS,
        payload:userdetails       
    }
}

export const registerFail = (error) =>{
    return{
        type: USER_REGISTER_FAIL,
        payload:error       
    }
}

export const registerUser = (userdetails) => {

        console.log('Registering new user..')
        return function(dispatch) {
            let url="http://localhost:3001/users"
            dispatch(registerRequest())
            axios.get(url)
            .then(response => {
                const users = response.data
                console.log('Users',users)
                const userFound = users.find(user => {
                   return user.email === userdetails.email
                })
                   if (userFound === undefined)
                   {
                        axios.post(url, userdetails)
                        .then(function (response) {
                            // console.log("response - ",response);
                            dispatch(registerSucess(userdetails))
                            //alert('Successfully Registered! Login to Continue')

                        })
                        .catch(response => {
                            dispatch(registerFail('Registration Failed! Please Try Again!'))
                        })                       
                   }
                   else{
                       // console.log('Login Fail - Incorrect Password!')
                       dispatch(registerFail('Email is already registered. Please login!'))
                   }               
                });

}}


//LOGOUT

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.setItem('isLoggedIn',false)
    dispatch({ type: USER_LOGOUT })
    document.location.href = '/signin'
  }