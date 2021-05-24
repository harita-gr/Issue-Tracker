import IssueListScreen from './IssueListScreen'
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import thunk from 'redux-thunk';


describe('<IssueListScreen/>', () => {

    let wrapper;
    const initialState = {issueActions: {issues:[
        {
            "description": "On clicking Delete, the app crashes",
            "severity": "Major",
            "status": "In Progress",
            "date": "2021-04-23",
            "views": 68,
            "id": 1
          },
          {
            "description": "The heading Add is wrongly displayed as Edit",
            "severity": "Critical",
            "status": "Closed",
            "date": "2021-04-3",
            "views": 4,
            "id": 2
          },
          {
            "id": 3,
            "description": "The payment functionality is missing",
            "severity": "Major",
            "status": "In Progress",
            "date": "2021-04-21",
            "views": 68
          }
    ]}}
    const mockStore = configureStore([thunk])
    let store;
  

    beforeEach( () =>{
        store = mockStore(initialState)
        wrapper = render(<Provider store={store}><Router><IssueListScreen/></Router></Provider>); 
        //console.log(wrapper.debug())
    })

        it('render the page title',() => {
            const { getByText } = wrapper
            expect(getByText('ISSUE LIST')).not.toBeNull()
        })

        it('render the toggle column component',() => {
            const { getByText } = wrapper
            expect(getByText('Toggle Columns')).not.toBeNull()
        })

        it('render the add issue button',() => {
            const { getByText } = wrapper
            expect(getByText('ADD ISSUE')).not.toBeNull()
        })

        afterEach( () =>{
            jest.clearAllMocks();
          })


});
