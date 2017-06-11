/**
 * Created by dejan on 10/6/17.
 */

import React from "react";

import {
    View,
    Animated,
} from 'react-native';

import Styles from '../helpers/Styles';
import Stopwatch from '../custom_components/Stopwatch';
import Button from '../custom_components/Button';
import Prompt from 'react-native-prompt';
import Feedback from "./Feedback";

export default class RHoKTime extends React.Component {
    stopwatch;

    constructor(props) {
        super(props);

        this.state = {
            issuePromptVisible: false,
            feedbackY: new Animated.Value(600),
        };

        this._rhokOut = this._rhokOut.bind(this);
        this._hidePrompt = this._hidePrompt.bind(this);
        this._promptSubmitted = this._promptSubmitted.bind(this);
    }

    _rhokOut() {
        // Stop RHoKing and show the feedback screen.
        this.stopwatch.stop();

        Animated.spring(
            this.state.feedbackY,
            {
                toValue: 0,
                velocity: 3,
                tension: 5,
                friction: 6,
            }
        ).start();
    }

    _hidePrompt() {
        this.setState({issuePromptVisible: false});
    }

    _promptSubmitted() {
        this._hidePrompt();

        this.props.toggleModal(true);

        setTimeout(() => {
            this.props.toggleModal(false);

            setTimeout(() => {
                alert("Your issue has been reported.");
            }, 500);
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

            <Animated.View
                style={{position: 'absolute', top: 0, bottom: 0, transform: [{translateY: this.state.feedbackY}]}}
            >
                <Feedback
                    toggleModal={this.props.toggleModal}
                    navigator={this.props.navigator}
                />
            </Animated.View>
        </View>
    }
}
