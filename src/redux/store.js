
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//import reducers
import {userLoginReducer,userRegisterReducer} from './reducers/userReducer'
import {issueReducer} from './reducers/issueReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    issueActions: issueReducer
})
    
const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null
  

const initialState = {

    userLogin: { userInfo: userInfoFromStorage },
    issueActions: {issues:[],currentissue:{},issueCreated:false,issueUpdated:false}
  }

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )

export default store