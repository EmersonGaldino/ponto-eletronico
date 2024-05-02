import React, {useState, useEffect} from 'react';
import {useHistory, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Lottie from "react-lottie";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Icon,
} from 'semantic-ui-react';

import FormCreateUser from '../CreateUser/index'
import * as AuthOnActions from '../../store/auth/actions';
import * as MenuActions from '../../store/menu/actions';
import HomeAnimation from '../../Components/Lottie/39998-web-development.json'
import {DisplayMessage, Container, DivLottie, DivLogin} from './styles';

const Logon = ({
                   loadingMenu,
                   signInRequest,
                   loading,
                   success,
                   message
               }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HomeAnimation,

    };
    const [login, setLogin] = useState(null);
    const [password, setPassword] = useState(null);
    const [load, setLoad] = useState(null);
    const [erro, setErro] = useState(false);
    const [msg, setMsg] = useState(null);

    const [visibleForm, setVisibleForm] = useState(false);

    const history = useHistory();

    async function handlerLogin() {
        let valid = null;

        if (login === '' && password === '') valid = 0;
        else if (login === '') valid = 1;
        else if (password === '') valid = 2;

        switch (valid) {
            case 0:
                setMsg(`Precisamos do seus dados para acessar.`);
                setErro(true);
                setLoad(null);
                return false;
                break;
            case 1:
                setMsg(`Login não informado.`
                );
                setErro(true);
                setLoad(null);
                return false;
                break;
            case 2:
                setMsg(
                    `Senha não informada.`
                );
                setErro(true);
                setLoad(null);
                return false;
                break;
            default:
                break;
        }
        await signInRequest({login, password})
    }

    useEffect(() => {
        if (success) {
            loadingMenu();
            history.push('/home');
        }
    }, [success])


    return (
        <Container>
            <DivLottie>
                <Lottie options={defaultOptions}/>
            </DivLottie>
            <DivLogin>
                <Grid
                    textAlign="center"
                    style={{height: '100vh'}}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{maxWidth: 450}}>
                        {!visibleForm ? (
                            <>
                                <Header as="h2" color="blue" textAlign="center">
                                    <Icon name="clock outline"/> Realize o login
                                </Header>
                                <Form size="large">
                                    <Segment>
                                        <Form.Input
                                            fluid
                                            icon="user"
                                            iconPosition="left"
                                            placeholder="E-mail address"
                                            onChange={(e) => setLogin(e.target.value)}
                                        />
                                        <Form.Input
                                            fluid
                                            icon="lock"
                                            iconPosition="left"
                                            placeholder="Password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        {msg !== null || message !== '' ?
                                            <DisplayMessage>
                                                <li>
                                                    <ul>{msg !== null ? msg : message}</ul>
                                                </li>
                                            </DisplayMessage> : ''}
                                        <Button
                                            fluid
                                            inverted
                                            color='blue'
                                            onClick={() => handlerLogin()}
                                            loading={loading}>
                                            Logar
                                        </Button>
                                    </Segment>
                                    <Message>
                                        Ainda não tem acesso? <Link to='/createUser'>Crie sua conta</Link>
                                    </Message>
                                </Form>
                            </>
                        ) : (<FormCreateUser/>)}

                    </Grid.Column>

                </Grid>
            </DivLogin>
        </Container>
    );
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        loading: state.auth.loading,
        success: state.auth.success,
        message: state.auth.message
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingMenu: (token) => {
            dispatch(MenuActions.loadingMenu(token));
        },
        signInRequest: (params) => {
            dispatch(AuthOnActions.signInRequest(params));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logon);
