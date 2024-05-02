import React, {useState, useEffect} from 'react';
import {Menu, Segment, Dropdown} from 'semantic-ui-react';
import {connect} from 'react-redux';
import * as MenuActions from '../../store/menu/actions';
import * as AuthActions from '../../store/auth/actions';
import {Link, useHistory} from 'react-router-dom';

const Index = ({menu, userInfo, logOut, success}) => {
    const history = useHistory();
    const [active, setActive] = useState('Home');
    const [menuItem, setMenu] = useState([]);

    useEffect(() => {
        setMenu(menu);
    }, [success]);

    const LogOutAsync = () => {
        logOut();
        history.push('/');
    }

    const redirectPage = (item) => {
        setActive(item.description);
        history.push(item.link)
    }

    return (
        <Menu inverted fixed={"top"}>
            {menuItem.map((item) =>
                item.childrens != 0 ? (
                    <Dropdown item text={item.description} key={item.id}>
                        <Dropdown.Menu>
                            <Dropdown.Header name={item.description}>
                                {item.description}
                            </Dropdown.Header>
                            {item.childrens.map((subMenu, index) => (
                                <Dropdown.Item key={index}
                                               onClick={() => <Link to={item.link}/>} name={item.description}>
                                    {subMenu.description}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                ) : (
                    <Menu.Item
                        name={item.description}
                        active={active === item.description}
                        onClick={() => redirectPage(item)}
                    />
                )
            )}
            <Menu.Menu position='right'>
                <Dropdown item text={userInfo.name}>
                    <Dropdown.Menu>
                        <Dropdown.Header>Actions</Dropdown.Header>
                        <Link to='/profile' >
                            <Dropdown.Item style={{color:'#000'}}>Perfil</Dropdown.Item>
                        </Link>
                        <Dropdown.Item onClick={() => LogOutAsync()}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Menu>
        </Menu>
    );
};
const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        token: state.auth.accessToken,
        menu: state.menu.menu,
        success: state.menu.success,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingMenu: (token) => {
            dispatch(MenuActions.loadingMenu(token));
        },
        logOut: () => {
            dispatch(AuthActions.signOut());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
