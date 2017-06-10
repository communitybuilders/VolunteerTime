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
    static propTypes = TouchableHighlight.propTypes;

    render() {
        let {style} = this.props;

        return (
            <View style={Styles.row}>
                <TouchableHighlight underlayColor='#6445b3' {...this.props} style={[Styles.button, style]}>
                    <Text style={Styles.buttonText}>{this.props.title}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
