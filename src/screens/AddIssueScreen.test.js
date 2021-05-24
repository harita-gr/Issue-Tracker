import React from 'react';
import {shallow } from 'enzyme';
import AddIssueScreen from './AddIssueScreen'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'
import Header from '../components/Header';

describe('<AddIssueScreen/>', () => {

    let wrapper;
    const initialState = {issueActions: {issueCreated:false}}
    const mockStore = configureStore()
    let store;

    beforeEach( () =>{
        store = mockStore(initialState)
        wrapper = render(<Provider store={store}><Router><AddIssueScreen/></Router></Provider>); 
        //console.log(wrapper.debug())
    })

        it('render the form title',() => {
            const { getByText } = wrapper
            expect(getByText('ADD NEW ISSUE')).not.toBeNull()
        })

        afterEach( () =>{
            jest.clearAllMocks();
          })


});