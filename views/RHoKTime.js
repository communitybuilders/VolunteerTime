/**
 * Created by dejan on 10/6/17.
 */

import React from "react";

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import Styles from '../helpers/Styles';
import Stopwatch from '../custom_components/Stopwatch';
import Button from "../custom_components/Button";
import Router from "../helpers/Router";

export default class RHoKTime extends React.Component {
    stopwatch;

    constructor(props) {
        super(props);

        this._rhokOut = this._rhokOut.bind(this);
    }

    _rhokOut() {
        this.props.navigator.push(Router.ROUTES.Feedback);
    }

    render() {
        return <View
            style={[Styles.container, Styles.padded, Styles.centered]}
        >
            <Stopwatch
                ref={(ref) => this.stopwatch = ref}
            />

            <View style={Styles.row}>
                <TouchableHighlight style={[Styles.button, Styles.buttonWarning]} underlayColor='#ffa346' onPress={() => console.log("Test")}>
                    <Text style={Styles.buttonText}>Report Issue</Text>
                </TouchableHighlight>
            </View>

            <Button
                title={'RHoK Out!'}
                onPress={this._rhokOut}
            />
        </View>
    }
}
