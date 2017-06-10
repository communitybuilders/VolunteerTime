/**
 * Created by dejan on 10/6/17.
 */

import React from 'react';

import {
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from "../helpers/Styles";
import Button from "../custom_components/Button";

export default class Feedback extends React.Component {
    render() {
        return (
            <View style={[Styles.container, Styles.padded, {alignItems: 'center'}]}>
                <TextInput
                    multiline={true}
                />

                <View style={[Styles.row, {justifyContent: 'space-between', width: 200}]}>
                    <TouchableHighlight style={{padding: 10, backgroundColor: '#3b5998', width: 30, alignItems: 'center', borderRadius: 7}}>
                        <Icon name={'facebook'} color={'#fff'} />
                    </TouchableHighlight>

                    <TouchableHighlight style={{padding: 10, backgroundColor: '#00aced', width: 30, alignItems: 'center', borderRadius: 7}}>
                        <Icon name={'twitter'} color={'#fff'} />
                    </TouchableHighlight>

                    <TouchableHighlight style={{padding: 10, backgroundColor: '#0d77b7', width: 30, alignItems: 'center', borderRadius: 7}}>
                        <Icon name={'linkedin'} color={'#fff'} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
