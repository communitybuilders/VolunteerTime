/**
 * Created by dejan on 10/6/17.
 */

import React, {
    PropTypes,
} from 'react';

import {
    View,
    Text,
    Image,
} from 'react-native';

import Styles from "../helpers/Styles";
import Button from "../custom_components/Button";
import Router from "../helpers/Router";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class MyTracks extends React.Component {
    static propTypes = {
        user: PropTypes.object
    };

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (
            <View style={[Styles.container, Styles.centered, Styles.padded]}>
                {/* TODO: Logo */}

                <Text>Hi, welcome back!</Text>

                <Text style={[Styles.spacedTop, Styles.spacedBottom]}>My Tracks will one day go here.</Text>

                <Button
                    title={'Let\'s RHoK!'}
                    onPress={() => this.props.navigator.push(Router.addProps(Router.ROUTES.SelectEvent))}
                />
            </View>
        );
    }
}
