import React, {
    PropTypes,
} from 'react';

import {
    View,
    PanResponder,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
const ReactNativeComponentTree = require('ReactNativeComponentTree');

const STAR_MARGIN = 15;
const STAR_SIZE = 50;

export default class StarRating extends React.Component {
    static propTypes = {
        onNewCount: PropTypes.func,
    };

    _panResponder;

    constructor(props) {
        super(props);

        this.state = {
            selectedStarsCount: []
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if( prevState.selectedStarsCount !== this.state.selectedStarsCount ) {
            this._onNewCount();
        }
    }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            // Ask to be the responder:
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

            onPanResponderGrant: (evt, gestureState) => {
                // The gesture has started. Show visual feedback so the user knows
                // what is happening!

                // Get the star we clicked.
                let starPosition = this.constructor._getStarPosition(evt.nativeEvent.target);

                this.setState({selectedStarsCount: starPosition + 1});
            },
            onPanResponderMove: (evt, gestureState) => {
                let starPosition = this.constructor._getStarPosition(evt.nativeEvent.target);

                let spaceBetweenStars = STAR_MARGIN + STAR_SIZE;

                // Divide the location of the touchEvent (relative to the star we started on) by the space between stars
                // and floor that number to get the number of new stars to select.
                let numberOfStarsToSelect = Math.floor(evt.nativeEvent.locationX / spaceBetweenStars);

                // Set our star count to the position of the initial star + 1 + the new number of stars to select.
                this.setState({selectedStarsCount: starPosition + 1 + numberOfStarsToSelect});
            },
        });
    }

    _onNewCount() {
        this.props.onNewCount && this.props.onNewCount(this.state.selectedStarsCount);
    }

    static _getStarPosition(nodeId) {
        return parseInt(ReactNativeComponentTree.getInstanceFromNode(nodeId)._hostParent._currentElement._owner._currentElement.key);
    }

    render() {
        let {style} = this.props;

        let stars = [];

        for( let i = 0; i < 5; i++ ) {
            let color = this.state.selectedStarsCount > i ? '#ff16ac' : '#dddddd';

            stars.push(
                <View key={i} style={{marginRight: STAR_MARGIN}} {...this._panResponder.panHandlers}>
                    <Icon name={'star'} size={STAR_SIZE} color={color} />
                </View>
            )
        }

        return <View style={[{flexDirection: 'row'}, style]}>{stars}</View>;
    }
}
