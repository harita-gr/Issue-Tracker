import RegisterScreen from './RegisterScreen'
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'


describe('<RegisterScreen/>', () => {

    let wrapper;
    const initialState = {userRegister: { userInfo: 'dummyData',error:"" }}
    const mockStore = configureStore()
    let store;
  

    beforeEach( () =>{
        store = mockStore(initialState)
        wrapper = render(<Provider store={store}><Router><RegisterScreen/></Router></Provider>); 
        //console.log(wrapper.debug())
    })

        it('render the correct form title',() => {
            const { getByText } = wrapper
            expect(getByText('REGISTER WITH US')).not.toBeNull()
        })

        it('render the register form correctly',() =>{      
            //const container = render(<Provider store={store}><Router><RegisterScreen/></Router></Provider>)
            expect(wrapper).toMatchSnapshot();
          })

          afterEach( () =>{
            jest.clearAllMocks();
          })

});