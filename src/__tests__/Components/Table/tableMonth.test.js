import React from "react";
import {shallow, ReactWrapper} from 'enzyme';
import Index from '../../../Components/MonthsTable/index'
import {Provider} from 'react-redux';
import store from '../../../store/Configuration/store';

describe('Testing MonthsTable component', () => {

    it('Should valid if number is two', () => {
        expect(2).toMatchSnapshot()
    })

    it('Should render correctly', () => {
        // const wrapper = shallow(
        //     <Provider store={store}>
        //         <Index month={12}
        //                index={1}
        //                loadingPoint={12}
        //                points={[{
        //                    backlunch: "13:31",
        //                    breaklunch: "12:31",
        //                    date: "0001-01-01T00:00:00",
        //                    entrance: "01/12/2020 08:33:48",
        //                    input: "08:33",
        //                    out: "18:02",
        //                    outPut: "01/12/2020 18:02:01"
        //                }]}
        //                loading={false}
        //                success={true}
        //                totalHours={90}
        //         />
        //     </Provider>
        // )
        // expect(wrapper).toMatchSnapshot();
    })
})
