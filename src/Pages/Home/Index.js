import React, {useEffect} from 'react';

import Menu from '../../Components/Menu/Index';
import * as PointActions from "../../store/Point/actions";
import {connect} from "react-redux";
import moment from "moment";
import {isAutenticed} from '../../common/AuthHelper';
import {useHistory} from 'react-router-dom';

import News from '../News/index'

import 'react-toastify/dist/ReactToastify.css';

const Home = ({loadingPoint}) => {
    const history = useHistory();
    const monthActual = moment().format("M")
    useEffect(() => {
        let auth = isAutenticed();

        if (!auth) {
            history.push('/');
        }
        loadingPoint(monthActual)
    }, [])
    return (
        <>
            <Menu/>
            <News/>
        </>
        );
}
const mapStateToProps = (state) => {
    return {
        success: state.point.success,
        userInfo: state.auth.userInfo,
        loading: state.menu.loading,
        points: state.point.points?.itens
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingPoint: (month) => {
            dispatch(PointActions.loadingPoint(month));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);