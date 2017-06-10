/**
 * Created by dejan on 18/1/17.
 */

import React, {Component, PropTypes} from 'react';
const ReactNative = require('react-native');

const {
    View,
    NavigatorIOS,
    StyleSheet,
    Keyboard,
} = ReactNative;

import LoadingModal from './LoadingModal';

class ModalNavigator extends Component {
    static propTypes = {
        ...NavigatorIOS.propTypes,
        navigatorComponent: PropTypes.func,
    };

    static defaultProps = {
        navigatorComponent: NavigatorIOS
    };

    static functionsToReplace = [
        'replace',
        'resetTo',
        'push',
        'pop',
    ];

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        };

        this._prepareRoute(this.props.initialRoute);
    }

    _getNavigator() {
        return this._navigator.navigator || this._navigator._navigationBarNavigator;
    }

    _prepareRoute(route) {
        this._addProps(route);
    }

    _addProps(route) {
        if( route.passProps === undefined ) {
            route.passProps = {};
        }

        route.passProps.toggleModal = this.toggleModal;
    }

    componentDidMount() {
        let navigator = this._getNavigator();

        for( let func of ModalNavigator.functionsToReplace ) {
            const originalFunc = navigator[ func ];

            navigator[ func ] = (route) => {
                // Dismiss keyboard on navigation.
                Keyboard.dismiss();

                if( route ) {
                    this._prepareRoute(route);
                }

                originalFunc(route);
            }
        }
    }

    toggleModal = (isLoading) => {
        this.setState({isLoading});
    };

    render() {
        let NavigatorComponent = this.props.navigatorComponent;

        return (
            <View style={styles.container}>
                <LoadingModal
                    visible={this.state.isLoading}
                    onRequestClose={() => {}}
                />

                <NavigatorComponent
                    {...this.props}
                    ref={(navigator) => this._navigator = navigator}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ModalNavigator
