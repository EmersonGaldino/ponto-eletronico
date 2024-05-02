import React, {useEffect, useState} from 'react'
import {Label, Menu, Table, Message, Segment, Container} from 'semantic-ui-react'
import {connect} from "react-redux";
import moment from 'moment';

import Progress from '../ProgressBar/index';
import * as MenuActions from "../../store/menu/actions";
import CardHours from '../CardHours/index'
import {ProgressBar} from './styles'
import * as PointActions from "../../store/Point/actions";
import Loader from '../../Components/Loading/index'
import ExportToFile from "../Export";

import {ContentTable} from './styles'


const Index = ({month, index, loadingPoint, points, loading, success, totalHours}) => {

    useEffect(() => {
        loadingPoint(index)
    }, [index])

    let totalHoursExecuting = [];
    const calculateTotalHours = (inital, finish) => {

        if (inital != undefined && finish != undefined) {

            let tot = moment.utc(moment(finish, "YYYY-MM-dd HH:mm:ss")
                .diff(moment(inital, "YYYY-MM-dd HH:mm:ss"))).format("HH:mm");

            let val1 = tot?.split(':')[0]
            let val2 = tot?.split(':')[1]
            totalHoursExecuting.push(parseFloat(val1 + '.' + val2))

            return moment.utc(moment(finish, "YYYY-MM-dd HH:mm:ss")
                .diff(moment(inital, "YYYY-MM-dd HH:mm:ss"))).subtract('hours', 1).format("HH:mm");

        }
    }

    const getHour = (date) => moment.utc(date).format("HH:mm:ss")

    const getDay = (date) => date.split(' ')[0]

    const getWeek = (date) => moment(date, 'DD/MM/YYYY').format('ddd');


    const reducer = (accumator, currentvalue) => accumator + currentvalue;

    useEffect(() => {

            localStorage.setItem('totalHoursExecuting', totalHoursExecuting.reduce(reducer) - points.length);
    }, [success])

    return (
        loading ? <Loader/> : (<>
            <CardHours month={month} data={points}/>
            {success && points.length <= 0 ?
                <Message
                    negative
                    floating
                    style={{marginTop: '10em'}}
                    icon='clock outline'
                    header='Nâo há registros de ponto para o mês selecionado!'
                    content='No momento não há lançamentos.'
                /> :
                <>

                    <ProgressBar>
                        <h2>Progresso de laçamentos</h2>
                        <Progress width={100 / 22 * points?.length}/>
                        <ExportToFile month={month}/>
                    </ProgressBar>
                    <ContentTable>
                        <Table color='blue' columns={12} selectable>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell textAlign={"center"}>Dia</Table.HeaderCell>
                                    <Table.HeaderCell textAlign={"center"}>Data</Table.HeaderCell>
                                    <Table.HeaderCell textAlign={"center"}>Entrada</Table.HeaderCell>
                                    <Table.HeaderCell textAlign={"center"}>Inicio Intervalo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign={"center"}>Fim Intervalo</Table.HeaderCell>
                                    <Table.HeaderCell textAlign={"center"}>Saida</Table.HeaderCell>
                                    <Table.HeaderCell textAlign={"center"}>Total Horas/Dia</Table.HeaderCell>
                                    {/*<Table.HeaderCell textAlign={"center"}>Observações</Table.HeaderCell>*/}
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {points?.map((item, index) => (
                                    <Table.Row key={index}>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {
                                                getWeek(item.entrance) === 'Invalid date' ? '' : getWeek(item.entrance)
                                            }
                                        </Table.Cell>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {
                                                getDay(item.entrance) === 'Invalid date' ?
                                                    '-' :
                                                    getDay(item.entrance)
                                            }
                                        </Table.Cell>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {
                                                item.input === undefined ?
                                                    '-' :
                                                    item.input
                                            }
                                        </Table.Cell>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {
                                                item.breaklunch === undefined ?
                                                    '-' :
                                                    item.breaklunch
                                            }
                                        </Table.Cell>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {item.backlunch === undefined ? '-' : item.backlunch
                                            }
                                        </Table.Cell>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {
                                                item.out === undefined ? '-' : item.out
                                            }
                                        </Table.Cell>
                                        <Table.Cell
                                            textAlign={"center"}>
                                            {
                                                calculateTotalHours(item.entrance, item.outPut)
                                            }
                                        </Table.Cell>

                                    </Table.Row>
                                ))}

                            </Table.Body>
                            <Table.Footer>
                                <Table.Row>
                                    <Table.HeaderCell textAlign={"center"}>Total horas </Table.HeaderCell>
                                    <Table.HeaderCell/>
                                    <Table.HeaderCell/>
                                    <Table.HeaderCell/>
                                    <Table.HeaderCell/>
                                    <Table.HeaderCell/>
                                    <Table.HeaderCell textAlign={"center"}>
                                        {

                                            parseFloat(totalHoursExecuting.reduce(reducer)).toFixed(2) - points.length
                                        }
                                    </Table.HeaderCell>
                                </Table.Row>
                            </Table.Footer>
                        </Table>
                    </ContentTable>

                </>
            }
        </>)
    )
};
const mapStateToProps = (state) => {
    return {
        success: state.point.success,
        userInfo: state.auth.userInfo,
        loading: state.point.loading,
        points: state.point.points?.itens,
        totalHours: state.point.hours
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingMenu: (token) => {
            dispatch(MenuActions.loadingMenu(token));
        },
        loadingPoint: (month) => {
            dispatch(PointActions.loadingPoint(month));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
