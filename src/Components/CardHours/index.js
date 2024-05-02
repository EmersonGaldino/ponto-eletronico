import React, {useEffect, useState} from 'react';
import {Button, Card, Icon,Label,Message} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {Container} from './styles';
import * as PointActions from '../../store/Point/actions';

const Index = ({
                   userInfo,
                   registerPoint,
                   loading,
                   card,
                   loadingPoint
               }) => {

    const tot = localStorage.getItem('totalHoursExecuting')
    const calculate = (complete, horas) => {
        return Math.round((100 / horas) * complete);
    };

    const items = card.map((it, idx) => (
        {
            header: `Olá ${userInfo.name}`,
            description: `Até agora você atuou 
            ${calculate(tot,it?.totalHours)}%
                    das ${it?.totalHours} horas mensais programadas.`,
            // meta: `R$ ${(tot * 75).toLocaleString('pt-br', {minimumFractionDigits: 2})} valor das horas trabalhadas`,
        }
    ))

    const handleRegister = async () => {
        await registerPoint();
        await loadingPoint(card[0].month)
    };

    return (
        <Container>

            {card && (
                <>
                    <Card.Group items={items}/>
                    <Button
                        inverted
                        color='green'
                        onClick={() => handleRegister()}
                        loading={loading}
                    >
                        <Icon name="calendar check outline"/>
                        Registrar ponto
                    </Button>
                </>
            )}
        </Container>
    );
};
const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        loading: state.point.loading,
        selected: state.menu.selected,
        card: state.point.points.month,
        points: state.point.points?.itens,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        registerPoint: () => {
            dispatch(PointActions.pointRegister());
        },
        loadingPoint: (month) => {
            dispatch(PointActions.loadingPoint(month));
        },

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);

