import React from 'react';
import {shallow } from 'enzyme';
import Header from '../issue-tracker/src/components/Header'
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'; // Smart components

describe('<Header/>', () => {

    let wrapper;
    const mockStore = configureStore();
    const initialState = {
        userLogin: { userInfo: 'userInfoFromStorage' },
    };
    
    const store = mockStore(initialState);
    
        it('render all the 3 Nav links', () => {
            wrapper = shallow( <Provider store={store}><Header/></Provider>); 
            console.log(wrapper.debug())
            expect(wrapper.find('.nav-link').length).toBe(3);
        });

});