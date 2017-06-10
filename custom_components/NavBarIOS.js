/**
 * Created by dejan on 19/1/17.
 */

import React, {Component, PropTypes} from 'react';
const ReactNative = require('react-native');

const {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} = ReactNative;

import {Navigator} from 'react-native-deprecated-custom-components';

import Icon from 'react-native-vector-icons/FontAwesome';

const NAV_BAR_COLOR = '#1F3F55';

class NavBarIOS extends Component {
    static propTypes = {
        logInRoute: PropTypes.object,
        onLogOutPress: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            tooltipStyle: styles.hidden
        };

        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
        this._onBackPress = this._onBackPress.bind(this);
        this._onLogOutPress = this._onLogOutPress.bind(this);
    }

    componentDidMount() {
        // We will override navigation bar updating and manually`
        // force updates when our parent NavBarIOS component
        // is about to update.
        // This is done to handle a bug in React Native where the
        // NavBar title does not update on push()'s.
        this._navigationBar.shouldComponentUpdate = () => (false);
    }

    componentWillUpdate() {
        requestAnimationFrame(() => {
            // Force update our _navigationBar on the next animation
            // frame and its title should be correctly updated.
            this._navigationBar.forceUpdate();
        });
    }

    _onBackPress() {
        this.props.navigator.pop();
    }

    _onLogOutPress() {
        this.props.onLogOutPress(this.props.navigator);
    }

    showTooltip() {
        this.setState({tooltipStyle: styles.tooltip});
    }

    hideTooltip() {
        this.setState({tooltipStyle: styles.hidden});
    }

    render() {
        let logOutButton, backButton = null;
        let currentRoutes = this.props.navigator.getCurrentRoutes();
        let isLogInRoute = this.props.logInRoute === currentRoutes[ currentRoutes.length-1 ];

        if( currentRoutes.length > 1 ) {
            // Add a back button.
            backButton = <TouchableOpacity onPress={this._onBackPress} style={styles.navBarButton}>
                <Icon color={NAV_BAR_COLOR} name="chevron-left" size={22} />
            </TouchableOpacity>;
        }

        if( !isLogInRoute && this.props.onLogOutPress ) {
            // Add a log out button if we provided a log out press handler.
            logOutButton = (
                <TouchableOpacity
                    onPress={this._onLogOutPress}
                    onLongPress={this.showTooltip}
                    onPressOut={this.hideTooltip}
                    style={styles.navBarButton}
                >
                    <Text
                        style={this.state.tooltipStyle}
                    >Log out</Text>
                    <View style={styles.centered}>
                        <Icon name={'sign-out'} color={'#ccc'} size={22}/>
                    </View>
                </TouchableOpacity>
            );
        }

        return <Navigator.NavigationBar
            ref={ele => this._navigationBar = ele}
            {...this.props}
            routeMapper={{
                LeftButton: (route, navigator, index, navState) => (
                    <View style={[styles.container]}>
                        {backButton}
                    </View>
                ),
                Title: (route, navigator, index, navState) => (
                    <View style={styles.container}>
                        <Text style={[styles.title, styles.navBarColor]}>{route.title}</Text>
                    </View>
                ),
                RightButton: (route, navigator, index, navState) => (
                    <View style={[styles.container]}>
                        {logOutButton}
                    </View>
                )
            }}
            navigationStyles={Navigator.NavigationBar.StylesIOS}
        />;
    }
}

const styles = StyleSheet.create({
    navBarColor: {
        color: NAV_BAR_COLOR,
    },
    title: {
        fontWeight: 'bold'
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    tooltip: {
        position: 'absolute',
        top: 10,
        left: 0,
        fontSize: 10,
        width: 50,
        color: '#fff',
        backgroundColor: '#797979',
        padding: 5,
        textAlign: 'center',
        zIndex: 2
    },
    hidden: {
        height: 0,
        opacity: 0
    },
    navBarButton: {
        flex: 1, // Take up all vertical space.
        justifyContent: 'center', // Center children vertically
        paddingLeft: 20, // Pad left and right to ensure there's a big click-box.
        paddingRight: 20
    }
});

export default NavBarIOS
