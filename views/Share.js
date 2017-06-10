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
import Styles from '../helpers/Styles';
import RNShare from 'react-native-share';

export default class Share extends React.Component {
    constructor(props) {
        super(props);
    }

    static _shareSocialMedia(platform) {
        // Todo: Fix for LinkedIn.
        RNShare.shareSingle({
            'title': 'Check me out!',
            'message': 'I just volunteered for charity X!',
            'social': platform,
        })
    }

    render() {
        return (
            <View style={[Styles.container, Styles.padded, {alignItems: 'center'}]}>
                <View style={[Styles.row, {justifyContent: 'space-between', width: 200}]}>
                    <TouchableHighlight style={{padding: 10, backgroundColor: '#3b5998', width: 30, alignItems: 'center', borderRadius: 7}} onPress={() => this.constructor._shareSocialMedia('facebook')}>
                        <Icon name={'facebook'} color={'#fff'} />
                    </TouchableHighlight>

                    <TouchableHighlight style={{padding: 10, backgroundColor: '#00aced', width: 30, alignItems: 'center', borderRadius: 7}} onPress={() => this.constructor._shareSocialMedia('twitter')}>
                        <Icon name={'twitter'} color={'#fff'} />
                    </TouchableHighlight>

                    <TouchableHighlight style={{padding: 10, backgroundColor: '#0d77b7', width: 30, alignItems: 'center', borderRadius: 7}} onPress={() => this.constructor._shareSocialMedia('linkedIn')}>
                        <Icon name={'linkedin'} color={'#fff'} />
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}
