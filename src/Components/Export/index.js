import React from "react";
import {CSVLink} from "react-csv";
import * as PointActions from "../../store/Point/actions";
import {connect} from "react-redux";
import {Button, Icon} from "semantic-ui-react";

const Index = (
    {
        points,
        loading,
        month
    }) => {

    const headers = [{
        label: 'Data',
        key: 'details.entrance'
    },
        {
            label: 'Total',
            key: 'details.entrance'
        }]
    return (
        <CSVLink
            data={points}
            separator={";"}
            filename={`ponto_eletronico_${month}.csv`}>
            <Button
                inverted
                color='orange'
                loading={loading}
                style={{marginBottom: '15px'}}
            >
                <Icon name="file alternate"/>
                Download File Complete
            </Button>
        </CSVLink>

    )
}

const mapStateToProps = (state) => {
    return {
        success: state.point.success,
        userInfo: state.auth.userInfo,
        loading: state.point.loading,
        points: state.point.points?.itens,
        point: state.point.point
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingPoint: (month) => {
            dispatch(PointActions.loadingPoint(month));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);