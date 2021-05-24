import React from 'react';
import {shallow } from 'enzyme';
import ReportScreen from './ReportScreen'
import { Provider } from 'react-redux'

describe('<ReportScreen/>', () => {

    let wrapper;

        it('render the correct chart heading name',() => {
            wrapper = shallow(<ReportScreen/>); 
            expect(wrapper.find("h4").text()).toContain("Most Viewed Issues")
        })

});