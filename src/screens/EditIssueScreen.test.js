import React from 'react';
import EditIssueScreen from './EditIssueScreen'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import thunk from 'redux-thunk';


describe('<EditIssueScreen/>', () => {

    let wrapper;
    const initialState = {issueActions: {issueUpdated:false,currentissue:{       
            "description": "On Adding to the cart, the item does not gets added",
            "severity": "Major",
            "status": "In Progress",
            "id": 4,
            "date": "2021-04-28",
            "views": 18}}}
    const mockStore = configureStore([thunk])
    let store;

    beforeEach( () =>{
        store = mockStore(initialState)
        wrapper = render(<Provider store={store}><Router><EditIssueScreen/></Router></Provider>); 
        //console.log(wrapper.debug())
    })

        it('render the form title',() => {
            const { getByText } = wrapper
            expect(getByText('EDIT ISSUE')).not.toBeNull()
        })

        afterEach( () =>{
            jest.clearAllMocks();
          })


});