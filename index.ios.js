'use strict';

import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    StyleSheet,
} from 'react-native';

import Router from './helpers/Router';
import {Navigator} from 'react-native-deprecated-custom-components';
import ModalNavigator from './custom_components/ModalNavigator';
import NavBarIOS from './custom_components/NavBarIOS';

export default class VolunteerTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isInitialLoading: false
        };
    };

    static renderScene(route, navigator) {
        if( !route.passProps ) {
            route.passProps = {};
        }

        let Component = route.component;

        return <Component {...route.passProps} navigator={navigator} />
    }

    _onLogOutPress = (navigator) => {
        navigator.resetTo(Router.ROUTES.login);

        AsyncStorage.clear();
    };

    render() {
        if( !this.state.isInitialLoading ) {
            let initialRoute = Router.ROUTES.login;

            return (
                <ModalNavigator
                    navigatorComponent={Navigator}
                    navigationBar={<NavBarIOS logInRoute={Router.ROUTES.login} onLogOutPress={this._onLogOutPress} />}
                    initialRoute={initialRoute}
                    style={styles.container}
                    renderScene={VolunteerTime.renderScene}
                />
            );
        }else {
            return <View />;
        }
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});

AppRegistry.registerComponent('VolunteerTime', () => VolunteerTime);
