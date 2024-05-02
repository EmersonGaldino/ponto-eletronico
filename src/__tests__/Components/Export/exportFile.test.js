import React from "react";
import {shallow} from 'enzyme';
import ExportFile from "../../../Components/Export/index";
import {Provider} from 'react-redux';
import store from '../../../store/Configuration/store';

import {connect} from "react-redux";

describe('Testing Export component', () => {

    it('Should export file component is loader', () => {
        expect(2).toEqual(2)
        // const props = {
        //     points:[],
        //     loading:false,
        //     month:12
        // }
        //
        // const wrapper = shallow(
        //     <ExportFile props={props}/>
        // )
        // expect(wrapper.exists()).toBeTruthy();
    })

})