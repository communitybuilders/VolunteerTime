/**
 * Created by dejan on 10/6/17.
 */

import React from "react";

import {
    View,
} from 'react-native';

import Styles from '../helpers/Styles';
import Stopwatch from '../custom_components/Stopwatch';
import Button from '../custom_components/Button';
import Router from '../helpers/Router';
import Prompt from 'react-native-prompt';

export default class RHoKTime extends React.Component {
    stopwatch;

    constructor(props) {
        super(props);

        this.state = {
            issuePromptVisible: false,
        };

        this._rhokOut = this._rhokOut.bind(this);
        this._hidePrompt = this._hidePrompt.bind(this);
        this._promptSubmitted = this._promptSubmitted.bind(this);
    }

    _rhokOut() {
        this.props.navigator.push(Router.ROUTES.Share);
    }

    _hidePrompt() {
        this.setState({issuePromptVisible: false});
    }

    _promptSubmitted() {
        this._hidePrompt();

        this.props.toggleModal(true);

        setTimeout(() => {
            this.props.toggleModal(false);
        }, 1500);
    }

    render() {
        return <View
            style={[Styles.container, Styles.padded, Styles.centered]}
        >
            <Stopwatch
                style={{fontSize: 50}}
                ref={(ref) => this.stopwatch = ref}
            />

            <Button
                style={[Styles.buttonWarning]}
                underlayColor='#ffa346'
                title={'Report Issue'}
                onPress={() => this.setState({issuePromptVisible: true})}
            />

            <Prompt
                visible={this.state.issuePromptVisible}
                title={'Report Issue'}
                submitText={'Report'}
                onCancel={this._hidePrompt}
                onSubmit={this._promptSubmitted}
            />

            <Button
                title={'RHoK Out!'}
                onPress={this._rhokOut}
            />
        </View>
    }
}
