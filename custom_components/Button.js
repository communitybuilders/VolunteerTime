/**
 * Created by dejan on 10/6/17.
 */

import React, {
    PropTypes,
} from 'react';

import {
    View,
    TouchableHighlight,
    Text,
    ViewPropTypes,
} from 'react-native';

import Styles from '../helpers/Styles';

export default class Button extends React.Component {
    static propTypes = {
        onPress: PropTypes.func,
        style: ViewPropTypes.style,
        title: PropTypes.string,
    };

    render() {
        let {style} = this.props;

        return (
            <View style={[Styles.row, style]}>
                <TouchableHighlight style={Styles.button} underlayColor='#6445b3' onPress={() => this.props.onPress && this.props.onPress()}>
                    <Text style={Styles.buttonText}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
