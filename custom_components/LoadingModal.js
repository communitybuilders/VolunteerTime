/**
 * Created by dejan on 18/1/17.
 */

import React, {Component, PropTypes} from 'react';
const ReactNative = require('react-native');

const {
    View,
    Modal,
    ActivityIndicator,
    StyleSheet,
} = ReactNative;

class LoadingModal extends Component {
    static propTypes = {
        visible: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func
    };

    render() {
        return (
            <Modal
                animationType={"fade"}
                visible={this.props.visible}
                transparent={true}
                onRequestClose={() => this.props.onRequestClose.bind(this)}
                supportedOrientations={['portrait', 'landscape']}
            >

                <View
                    style={styles.container}>
                    <ActivityIndicator
                        color={'white'} />
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingModal
