import React from 'react';

import {
    View,
    Text,
    TextInput,
} from 'react-native';

import Styles from '../helpers/Styles';
import StarRating from "../custom_components/StarRating";

export default class Feedback extends React.Component {
    render() {
        return (
            <View style={[Styles.container, Styles.centered, Styles.padded]}>
                <Text>How does it make you feel?</Text>

                <View style={Styles.row}>
                    <TextInput
                        multiline={true}
                        style={Styles.InputBox}
                    />
                </View>

                <View style={Styles.row}>
                    <StarRating />
                </View>
            </View>
        );
    }
}
