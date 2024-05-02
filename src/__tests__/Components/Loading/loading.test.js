import React from "react";
import {shallow} from 'enzyme';
import Loading from "../../../Components/Loading/index";

describe('Testing Loading component', () => {

    it('Should loading is loader', () => {
        const wrapper = shallow(<Loading/>)
        expect(wrapper.exists()).toBeTruthy();
    })

})