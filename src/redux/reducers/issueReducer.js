import {FETCH_ISSUE,
        VIEW_ISSUE,
        ADD_ISSUE,
        EDIT_ISSUE,
        DELETE_ISSUE
    }from '../constants/issueTypes'

    export const issueReducer = (state ={},action) => {

    switch(action.type) {
        case FETCH_ISSUE:
            return{
                ...state,
                issues:action.payload
            }
        case VIEW_ISSUE:
            return{
                ...state,
                currentissue:action.payload
            }   
        case ADD_ISSUE:
             return {...state,
                  issueCreated:true 
            }  

        case EDIT_ISSUE:
             return {...state ,issueUpdated:true} 
        case DELETE_ISSUE:
             return {...state }     
         default:
             return state   
    }
  }
