/**
 * Created by dejan on 10/6/17.
 */

import React from 'react';

import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Styles from '../helpers/Styles';
import RNShare from 'react-native-share';
import Button from "../custom_components/Button";

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
                <Text style={[Styles.headerTitle, {marginBottom: 50}]}>Share your achievement to social media!</Text>

                <View style={[Styles.row]}>
                    <View style={{flex: 1, marginLeft: 20}}>
                        <TouchableHighlight style={{padding: 10, backgroundColor: '#3b5998', width: 70, alignItems: 'center', borderRadius: 7}} onPress={() => this.constructor._shareSocialMedia('facebook')}>
                            <Icon name={'facebook'} color={'#fff'} size={50} />
                        </TouchableHighlight>
                    </View>

                    <View style={{flex: 1}}>
                        <TouchableHighlight style={{padding: 10, backgroundColor: '#00aced', width: 70, alignItems: 'center', borderRadius: 7}} onPress={() => this.constructor._shareSocialMedia('twitter')}>
                            <Icon name={'twitter'} color={'#fff'} size={50} />
                        </TouchableHighlight>
                    </View>

                    <View style={{flex: 1}}>
                        <TouchableHighlight style={{padding: 10, backgroundColor: '#0d77b7', width: 70, alignItems: 'center', borderRadius: 7}} onPress={() => this.constructor._shareSocialMedia('linkedIn')}>
                            <Icon name={'linkedin'} color={'#fff'} size={50} />
                        </TouchableHighlight>
                    </View>
                </View>

                <View style={{flex: 1, flexDirection: 'row'}}>
                <Button
                    style={{flex: 0, padding: 20, alignSelf: 'flex-end'}}
                    title={'I\'m ready to RHoK some more'}
                    onPress={() => this.props.navigator.popN(2)}
                />
                </View>
            </View>
        )
    }
}
