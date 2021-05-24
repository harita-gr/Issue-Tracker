import React from 'react';
import {shallow } from 'enzyme';
import HomeScreen from './HomeScreen'

describe('<HomeScreen/>', () => {

    let wrapper;

    beforeEach(() =>{
        wrapper = shallow(<HomeScreen/>); 
     });

     
        it('should render correctly using Full DOM', () => {
            expect(wrapper).toMatchSnapshot();
        });

});