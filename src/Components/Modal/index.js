import React, {useState} from 'react';

const index = () => {
    const [state, setState] = useState({
        open: false,
        dimmer: undefined
    });
    const [action, setAction] = useState('CLOSE_MODAL')
    const handleModal = ( action) => {
        switch (action) {
            case 'OPEN_MODAL':
                return setState({open: true, dimmer: action.dimmer});
                break;
            case 'CLOSE_MODAL':
                return setState({open: false})
        }
    }
    return (
        <Modal
            dimmer={state.dimmer}
            open={state.open}
            onClose={() => handleModal('CLOSE_MODAL')}
        >
            <Modal.Header>Use Google's location service?</Modal.Header>
            <Modal.Content>
                Let Google help apps determine location. This means sending anonymous
                location data to Google, even when no apps are running.
            </Modal.Content>
            <Modal.Actions>
                <Button negative onClick={() => handleModal({type: 'CLOSE_MODAL'})}>
                    Disagree
                </Button>
                <Button positive onClick={() => handleModal({type: 'CLOSE_MODAL'})}>
                    Agree
                </Button>
            </Modal.Actions>
        </Modal>

    )
}

export default index