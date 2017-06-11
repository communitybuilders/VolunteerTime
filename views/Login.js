/**
 * Created by Dejan on 11/1/17.
 */
'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    Text,
    TextInput,
    View,
    AsyncStorage,
} = ReactNative;

import Button from "../custom_components/Button";

import Router from '../helpers/Router';
import Styles from '../helpers/Styles';

class Login extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    onPressLogIn() {
        this.props.toggleModal(true);
        this.setState({message: null});

        fetch("https://auth.communitybuilder.com.au/apigility/oauth/authenticate", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
            .then(response => response.json())
            .then(json => this.handleLogInResponse(json))
            .catch(error => this.handleError(error.message));
    }

    handleError(message) {
        this.setState({message});
        this.props.toggleModal(false);
    }

    handleLogInResponse(response) {
        this.props.toggleModal(false);

        // TODO Remove:
        if( response.error_message ) {
            return this.handleError(response.error_message);
        }

        let nextRoute = Router.addProps(Router.ROUTES.Profile, {
            user: response.user,
        });

        AsyncStorage.setItem('loggedInUser', JSON.stringify(response.user), () => this.props.navigator.replace(nextRoute));
    }

    onUsernameChangeText(username) {
        this.setState({username})
    }

    onPasswordChangeText(password) {
        this.setState({password})
    }

    render() {
        return (
            <View
                style={[Styles.container, Styles.padded, Styles.centered]}
            >
                <View style={Styles.row}>
                    <TextInput
                        ref={(ref) => this._usernameInput = ref}
                        underlineColorAndroid='transparent'
                        autoCorrect={false}
                        autoFocus={true}
                        autoCapitalize={'none'}
                        style={Styles.Input}
                        value={this.state.username}
                        onChangeText={this.onUsernameChangeText.bind(this)}
                        placeholder='Username'
                        onSubmitEditing={() => {this._passwordInput.focus()}}
                    />
                </View>

                <View style={Styles.row}>
                    <TextInput
                        ref={passwordInput => this._passwordInput = passwordInput}
                        underlineColorAndroid='transparent'
                        secureTextEntry={true}
                        style={Styles.Input}
                        value={this.state.password}
                        onChangeText={this.onPasswordChangeText.bind(this)}
                        placeholder='Password'
                        returnKeyType={'go'}
                        onSubmitEditing={this.onPressLogIn.bind(this)}
                    />
                </View>

                <Button
                    title={'LOG IN'}
                    onPress={this.onPressLogIn.bind(this)}
                />

                <Text>{this.state.message}</Text>
            </View>
        );
    }
}

export default Login
