import Header from './Header'
import {BrowserRouter as Router} from 'react-router-dom'
import React from 'react';
import {shallow } from 'enzyme';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from '@testing-library/react'


describe('<Header/>', () => {

    let wrapper;
    const initialState = {userLogin: { userInfo: 'dummyData'}}
    const mockStore = configureStore()
    let store;
  

    beforeEach( () =>{
        store = mockStore(initialState)
        wrapper = render(<Provider store={store}><Router><Header/></Router></Provider>); 
        //console.log(wrapper.debug())
    })

        it('render the 3 nav links',() => {
            const { getByText } = wrapper
            expect(getByText('ISSUES')).not.toBeNull()
            expect(getByText('REPORTS')).not.toBeNull()
            expect(getByText('ABOUT')).not.toBeNull()
            
        })

        it('render the brand title in nav bar',() => {
          const { getByText } = wrapper
          expect(getByText('Issue Tracker')).not.toBeNull()
          
      })

      it('render the header correctly',() =>{      
        const container = render(<Provider store={store}><Router><Header/></Router></Provider>)
        expect(container).toMatchSnapshot();
      })

      afterEach( () =>{
        jest.clearAllMocks();
      })


});