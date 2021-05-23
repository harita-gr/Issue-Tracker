import {FETCH_ISSUE,
    VIEW_ISSUE,
    ADD_ISSUE,
    EDIT_ISSUE,
    DELETE_ISSUE
}from '../constants/issueTypes'
const axios = require('axios')


export const fetchIssues = (issues) =>{
    return{
        type: FETCH_ISSUE,
        payload:issues       
    }
}

export const fetchCurrentIssue = (issue) =>{
    return{
        type: VIEW_ISSUE,
        payload:issue 
    }
}

export const addIssue = () => {
    return {
        type: ADD_ISSUE
    }
}

export const deleteIssue = () => {
    return {
        type: DELETE_ISSUE
    }
}

export const editIssue = () => {
    return {
        type: EDIT_ISSUE
    }
}
//thunk => returns another function(dispatch)

export const fetchAllIssues = () => {
    //recieves dispatch() as argument
    return function(dispatch) {
        let url="http://localhost:3001/issues"
        axios.get(url)
        .then(response => {
            const issues = response.data
            console.log('Issues from Store:',issues)
            dispatch(fetchIssues(issues))
        })    
    }
}
export const fetchIssueDetails = (id) =>{
    return function(dispatch) {
        let url="http://localhost:3001/issues"
        axios.get(url)
        .then(response => {
            const issuelist = response.data
            console.log('Issue list -',issuelist)
            var issueDetails = issuelist.find( item => {
                return item.id == id
            })
            console.log('Issue Details:',issueDetails)
            console.log('Updating view number..',)     
            issueDetails.views +=1;
            axios.put(`${url}/${id}`,issueDetails)
            .then(
                axios.get(`${url}/${id}`)
                .then(response =>{
                    const currentIssue = response.data
                    dispatch(fetchCurrentIssue(currentIssue))
                })
            )          
        })
  }
}

export const addNewIssue = (newIssue) =>{
    console.log('Adding new issue..')
    return function(dispatch) {
        let url="http://localhost:3001/issues"
        axios.post(url, newIssue
          )
          .then(function (response) {
            console.log("response - ",response);
            dispatch(addIssue())
          })
     }}

     export const deleteAnIssue = (id) =>{
        console.log('Deleting issue..')
        return function(dispatch) {
            let url=`http://localhost:3001/issues/${id}`
            axios.delete(url)
              .then(function (response) {
                console.log("Deleted Successfully! - ",response);
                dispatch(addIssue())
                document.location.href = '/issues'
              })
              .catch(err => console.log(err))
    }}    

    export const editAnIssue = (id,issueDetails) =>{
        console.log('Editing issue..')
        return function(dispatch) {
            let url=`http://localhost:3001/issues/${id}`
            axios.put(url,issueDetails)
              .then(function (response) {
                console.log("Updated Successfully! - ",response);
                dispatch(editIssue())
                document.location.href = `/issue/${id}`
              })
              .catch(err => console.log(err))
         }}  