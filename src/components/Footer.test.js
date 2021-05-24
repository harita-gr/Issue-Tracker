import React from 'react';
import {shallow } from 'enzyme';
import Footer from './Footer'

describe('<Footer/>', () => {

    let wrapper;

     
        it('should render the footer text correctly', () => {
            wrapper = shallow(<Footer/>); 
            expect(wrapper.find("h6").text()).toContain("Copyright")
        });

        
      it('render the footer correctly',() =>{      
        wrapper = shallow(<Footer/>); 
        expect(wrapper).toMatchSnapshot();
      })

});