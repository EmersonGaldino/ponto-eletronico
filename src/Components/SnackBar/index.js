import React from 'react';
import {connect} from 'react-redux';
import * as ToastActions from '../../store/Toast/actions';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';


function Alert(AlertProps) {
    debugger;
    return <MuiAlert {...AlertProps} />;
}

const Toast = ({open, message, type, hideToast}) => {
    debugger
    const handleClose = () => {
        if (reason === 'clickaway') {
            return;
        }
        hideToast();
    };

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert elevation={6} variant="filled" severity={type}>
                {message}
            </Alert>
        </Snackbar>
    );
}

const mapStateToProps = (state) => ({
    ...state.toast,
});
const mapDispatchToProps = (dispatch) => {
    return {
        showToast: () => {
            dispatch(ToastActions.showToast())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Toast);