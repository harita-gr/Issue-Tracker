import React from 'react';
import {shallow } from 'enzyme';
import AboutScreen from './AboutScreen'

describe('<AboutScreen/>', () => {

    let wrapper;

    beforeEach(() =>{
        wrapper = shallow(<AboutScreen/>); 
     });

     
        it('should render correctly using Full DOM', () => {
            expect(wrapper).toMatchSnapshot();
        });

        it('render the correct heading name',() => {
            expect(wrapper.find("h3").text()).toContain("About")
        })

});