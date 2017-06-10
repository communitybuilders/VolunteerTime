/**
 * Created by dejan on 10/6/17.
 */

import React, {
    PropTypes,
} from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';

import Styles from "../helpers/Styles";
import Button from "../custom_components/Button";
import Router from "../helpers/Router";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Profile extends React.Component {
    static propTypes = {
        user: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
            badges: []
        };
    }

    componentDidMount() {
        fetch("http://dev.ldap-sync.myelectorate.com.au/api/getbadges", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: '{USERNAME_HERE}',
                password: '{PASSWORD_HERE}',
                base_url: 'https://thecollective.campaigncentral.com.au',
                user_id: '99999999',
            })
        })
            .then(response => response.json())
            .then(json => this._handleBadgesResponse(json))
            .catch(error => this._handleError(error.message));
    }

    _handleBadgesResponse(badges) {
        this.setState({badges});
    }

    _handleError(error) {
        console.log(error);
    }

    render() {
        let badges = [];

        for( let badge of this.state.badges ) {
            badges.push(<Image style={Styles.badge} key={badge.id} source={{uri: badge.image}} />)
        }

        let groups = [];

        // TODO: Fix groups.
        for( let i = 0; i < 5; i++ ) {
            groups.push(<Icon style={{fontSize: 30, marginRight: 10}} key={i} name={'group'} />);
        }

        return (
            <View style={[Styles.container, Styles.centered, Styles.padded]}>
                {/* TODO: Logo */}
                <Image style={{height: 100, width: 100, borderRadius: 50, marginBottom: 50}} source={{uri: `http://dev.ldap-sync.myelectorate.com.au/public/image/${this.props.user.uidNumber}`}} />

                <Text>Hi {this.props.user.displayname}, welcome back!</Text>

                <Text style={[Styles.spacedTop, Styles.spacedBottom]}>See the badges you have gained so far:</Text>

                {badges}

                <Text style={Styles.spacedTop}>I have RHoKed for:</Text>

                <View style={Styles.row}>
                    {groups}
                </View>

                <Button
                    style={Styles.spacedTop}
                    title={'My tracks'}
                />

                <Button
                    title={'Let\'s RHoK!'}
                    onPress={() => this.props.navigator.push(Router.addProps(Router.ROUTES.SelectEvent))}
                />
            </View>
        );
    }
}
