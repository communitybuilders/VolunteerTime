/**
 * Created by dejan on 10/6/17.
 */

import React from 'react';

import {
    View,
    TextInput,
    Image,
    Text,
} from 'react-native';

import Dropdown from 'react-native-dropdown-modal';

import Styles from '../helpers/Styles';
import Util from '../helpers/Util';
import Common from '../helpers/Common';
import Button from "../custom_components/Button";
import Router from "../helpers/Router";
import {ENTRIES1} from "./slider/static/entries";

export default class SelectEvent extends React.Component {
    addressTimeout;

    constructor(props) {
        super(props);

        this.state = {
            address: '96 Phillip Street Parramatta',
        };

        this._onChangeAddressText = this._onChangeAddressText.bind(this);
        this._rhokIn = this._rhokIn.bind(this);
    }

    _onChangeAddressText(text) {
        clearTimeout(this.addressTimeout);

        this.addressTimeout = setTimeout(() => this.setState({address: text}), 500);
    }

    _rhokIn() {
        this.props.navigator.push(Router.addProps(Router.ROUTES.RHokTime));
    }

    render() {
        return (
            <View style={[Styles.container, Styles.padded]}>
                {/*Logo*/}

                <View style={{flex: 2}}>
                    <View style={Styles.row}>
                        <TextInput
                            underlineColorAndroid='transparent'
                            autoCorrect={false}
                            style={Styles.Input}
                            placeholder={'Your address'}
                            onChangeText={this._onChangeAddressText}
                        />
                    </View>

                    <Image
                        style={Styles.staticMap}
                        source={{uri: Util.buildGoogleMapsURL(this.state.address, Util.MAP_TYPE_STATIC)}}
                    />
                </View>

                <View style={{flex: 3}}>
                    <Text style={[Styles.description, Styles.spacedTop]}>
                        Select Charity
                    </Text>

                    <View style={Styles.row}>
                        <Dropdown
                            {...Common.dropdownProps}
                            dataSource={ENTRIES1}
                            titleProperty={'title'}
                        />
                    </View>

                    <Text style={[Styles.description, Styles.spacedTop]}>
                        Select Event
                    </Text>

                    <View style={Styles.row}>
                        <Dropdown
                            {...Common.dropdownProps}
                            dataSource={['Event 1', 'Event 2']}
                        />
                    </View>

                    <Button
                        title={'RHoK In!'}
                        onPress={this._rhokIn}
                    />
                </View>
            </View>
        );
    }
}
