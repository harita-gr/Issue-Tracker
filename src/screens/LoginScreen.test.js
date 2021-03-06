import LoginScreen from './LoginScreen'
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import {shallow } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'


describe('<LoginScreen/>', () => {

    let wrapper;
    const initialState = {userLogin: { userInfo: 'dummyData',error:"" }}
    const mockStore = configureStore()
    let store;
  

    beforeEach( () =>{
        store = mockStore(initialState)
        wrapper = render(<Provider store={store}><Router><LoginScreen/></Router></Provider>); 
        //console.log(wrapper.debug())
    })

        it('render the correct form title',() => {
            const { getByText } = wrapper
            expect(getByText('WELCOME BACK USER')).not.toBeNull()
        })

        it('render the login form correctly',() =>{      
            //const container = render(<Provider store={store}><Router><RegisterScreen/></Router></Provider>)
            expect(wrapper).toMatchSnapshot();
          })

          afterEach( () =>{
            jest.clearAllMocks();
          })

});