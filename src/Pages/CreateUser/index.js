import React, {useState, useRef, useEffect} from "react";
import {Link, useHistory} from 'react-router-dom';
import {connect} from "react-redux";

import {
    Button,
    Checkbox,
    Header,
    Icon,
    Form,
    Segment,
    Message,
    Grid,
    Transition
} from 'semantic-ui-react'

import * as Yup from 'yup';
import * as UserActions from "../../store/User/actions";
import {ContainerForm, DivLottie} from "./styles";
import Lottie from "react-lottie";
import HomeAnimation from "../../Components/Lottie/39998-web-development.json";

const Index = ({loading, createUserRequest, success, verifyIfExists, exists}) => {
    const history = useHistory();
    const formRef = useRef(null);
    const [data, setData] = useState({
        Login: '',
        Password: '',
        PasswordRpt: '',
        Email: '',
        Accept: false
    })
    const [errors, setErros] = useState([]);

    const handleForm = async () => {
        try {
            setErros([])
            let schema = Yup.object().shape({
                Login: Yup.string().required().min(5, 'Login deve conter ao menos 5 digitos.'),
                Password: Yup.string().min(6, 'Sua senha deve conter 6 digitos.').required(),
                PasswordRpt: Yup.string().test('match', 'As senhas não conferem.', function (PasswordRpt) {
                    return PasswordRpt === this.parent.Password;
                }),
                Email: Yup.string().email('Não é um email válido').required(),
                Accept: Yup.bool().oneOf([true], 'Para criar o cadastro você deve aceitar os termos.')
            });
            await schema.validate(data, {
                abortEarly: false,
            });
            let send = {
                Name: data.Login,
                Email: data.Email,
                Password: data.Password
            }
            createUserRequest(send);
            history.push('/');
        } catch (err) {

            const validationErrors = {};
            if (err instanceof Yup.ValidationError) {
                setErros([])
                err.inner.forEach(error => {
                    validationErrors[error.path] = error.message;
                    setErros([error.message])
                });

            }
        }
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: HomeAnimation,
    };

    const handleValidDataUser = async (value, name) => {
        setErros([]);
        switch (name) {
            case 'Email':
                await verifyIfExists(value);
                if (exists) {
                    setErros('Email já cadastrado,tente utilizar outro.')
                    return false;
                }
                setData({...data, Email: value})
                break;
            case 'Login':
                await verifyIfExists(value);
                if (exists) {
                    setErros('Login já existe, utilize outro.')
                    return false;
                }
                setData({...data, Login: value});
                break;
            default:
                break;
        }
    }

    return (
            <ContainerForm>
                <DivLottie>
                    <Lottie options={defaultOptions}/>
                </DivLottie>
                <Grid
                    textAlign="center"
                    style={{height: '100vh'}}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{maxWidth: 650, width: '385px'}}>
                        <Header as="h2" color="blue" textAlign="center">
                            <Icon name="clock outline"/> Insira seus dados iniciais
                        </Header>
                        <Form onSubmit={handleForm} ref={formRef}>
                            <Segment>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        loading={loading}
                                        fluid
                                        iconPosition="left"
                                        icon='user'
                                        required
                                        placeholder='Login'
                                        onBlur={(e) =>
                                            handleValidDataUser(e.target.value, 'Login')}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        loading={loading}
                                        required
                                        iconPosition="left"
                                        fluid
                                        placeholder='Email'
                                        icon="at"
                                        onBlur={(e) =>
                                            handleValidDataUser(e.target.value, 'Email')}
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        required
                                        iconPosition="left"
                                        fluid
                                        type="password"
                                        placeholder='Senha'
                                        icon="lock"
                                        onChange={(e) =>
                                            setData({...data, Password: e.target.value}
                                            )}
                                    />
                                    <Form.Input
                                        required
                                        iconPosition="left"
                                        fluid
                                        type="password"
                                        placeholder='Digite novamente'
                                        icon="lock"
                                        onChange={(e) =>
                                            setData({...data, PasswordRpt: e.target.value}
                                            )}
                                    />
                                </Form.Group>
                                <Form.Checkbox
                                    label='Eu aceito todos os termos e condições.'
                                    onChange={(e) =>
                                        setData({...data, Accept: e.target.value}
                                        )}
                                />
                                <Button
                                    fluid
                                    inverted
                                    color='green'
                                    onClick={() => {
                                    }}
                                    loading={loading}>
                                    Criar
                                </Button>
                            </Segment>
                            {errors.length > 0 && (
                                <Message
                                    negative
                                    header='Revisar os seguintes campos.'
                                    list={[errors]}/>
                            )}
                            <Message>
                                Já tem cadastro? <Link to='/'>Realize o login</Link>
                            </Message>
                        </Form>
                    </Grid.Column>
                </Grid>
            </ContainerForm>
    )
}
const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        success: state.user.success,
        message: state.user.message,
        exists: state.user.exists,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUserRequest: (data) => {
            dispatch(UserActions.userRegister(data));
        },
        verifyIfExists: (data) => {
            dispatch(UserActions.existLoginOrEmail(data))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
