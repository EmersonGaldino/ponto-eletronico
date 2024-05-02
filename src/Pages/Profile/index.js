import React from "react";
import {connect} from "react-redux";
import {Grid, Image, Card, Icon, Button, List} from 'semantic-ui-react'
import moment from 'moment';
import PhoneInput from "react-phone-input-auto-format";

import Menu from "../../Components/Menu/Index";
import {Content} from './styles'
import * as UserActions from "../../store/User/actions";


const Index = ({profile, userInfo}) => {
    return (
        <Content>
            <Menu/>

            <Grid celled>
                <Grid.Column width={4}>
                    <Card link>
                        <Image
                            src={profile.avatar}
                            wrapped
                            ui={false}/>
                        <Card.Content>
                            <Card.Header>{userInfo.name}</Card.Header>
                            <Card.Meta>
                                <span className='date'>Join in:
                                    {
                                        moment.utc(profile.dateInclusionRegistration)
                                            .format('DD/MM/yyyy')
                                    }</span>
                            </Card.Meta>
                            <Card.Description>
                                {profile.bio}
                            </Card.Description>
                        </Card.Content>

                        <Card.Content extra>
                            <List>
                                <List.Item>
                                    <List.Icon name='money'/>
                                    <List.Content>Valor hora
                                        R$ {profile.hourValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='phone'/>
                                    <List.Content>{profile.phone}</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='mail'/>
                                    <List.Content>
                                        <a href={`mailto:${userInfo.email}`}>{userInfo.email}</a>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='linkify'/>
                                    <List.Content>
                                        <a href={`https://www.facebook.com/${profile.facebook}`}>Face</a>
                                    </List.Content>

                                </List.Item>
                                <List.Item>
                                    <List.Icon name='linkify'/>
                                    <List.Content>
                                        <a href={`https://www.instagram.com/${profile.instagram}`}>Insta</a>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid>
        </Content>
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.auth.userInfo,
        success: state.point.success,
        profile: state.auth.profile,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadingProfile: () => {
            dispatch(UserActions.loadingProfile());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);