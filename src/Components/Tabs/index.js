import React from 'react';
import {connect} from "react-redux";
import {Tab, Grid} from 'semantic-ui-react';
import moment from 'moment';
import Loader from "../Loading/index";
import Table from "../MonthsTable";
import * as MenuActions from "../../store/menu/actions";
import * as AuthActions from "../../store/auth/actions";


const Index = ({userInfo, loading}) => {

    const monthActual = moment().format("M")
    const panes = [
        {
            menuItem: 'Janeiro',
            render: () => <Tab.Pane><Table month={'Janeiro'} index={1}/></Tab.Pane>
        },
        {
            menuItem: 'Fevereiro',
            render: () => <Tab.Pane><Table month={'Fevereiro'} index={2}/></Tab.Pane>
        },
        {
            menuItem: 'Março',
            render: () => <Tab.Pane><Table month={'Março'} index={3}/></Tab.Pane>
        }, {
            menuItem: 'Abril',
            render: () => <Tab.Pane><Table month={'Abril'} index={4}/></Tab.Pane>
        },
        {
            menuItem: 'Maio',
            render: () => <Tab.Pane><Table month={'Maio'} index={5}/></Tab.Pane>
        },
        {
            menuItem: 'Junho',
            render: () => <Tab.Pane><Table month={'Junho'} index={6}/></Tab.Pane>
        }, {
            menuItem: 'Julho',
            render: () => <Tab.Pane><Table month={'Julho'} index={7}/></Tab.Pane>
        },
        {
            menuItem: 'Agosto',
            render: () => <Tab.Pane><Table month={'Agosto'} index={8}/></Tab.Pane>
        },
        {
            menuItem: 'Setembro',
            render: () => <Tab.Pane><Table month={'Setembro'} index={9}/></Tab.Pane>
        }, {
            menuItem: 'Outubro',
            render: () => <Tab.Pane><Table month={'Outubro'} index={10}/></Tab.Pane>
        },
        {
            menuItem: 'Novembro',
            render: () => <Tab.Pane><Table month={'Novembro'} index={11}/></Tab.Pane>
        },
        {
            menuItem: 'Dezembro',
            render: () => <Tab.Pane><Table month={'Dezembro'} index={12}/></Tab.Pane>
        }
    ];
    return (
        <Grid style={{marginTop: '35px'}}>
            {loading ? <Loader/> :
                <>
                    <Grid.Column>
                        <Tab
                            menu={{fluid: true, vertical: true, tabular: true }}
                            panes={panes}
                            defaultActiveIndex={monthActual == 12 ? monthActual - 1 : monthActual - 1}
                        />
                    </Grid.Column>
                </>
            }
        </Grid>
    )
}

const mapStateToProps = (state) => {

        return {
            userInfo: state.auth.userInfo,
            loading: state.menu.loading
        };
    }
;

const mapDispatchToProps = (dispatch) => {
        return {
            loadingMenu: (token) => {
                dispatch(MenuActions.loadingMenu(token));
            },
            logOut: () => {
                dispatch(AuthActions.signOut());
            },
        };
    }
;

export default connect(mapStateToProps, mapDispatchToProps)(Index);
