import React, {
    PropTypes,
} from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
    Keyboard,
    ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

import Router from '../helpers/Router';
import Styles from '../helpers/Styles';
import StarRating from '../custom_components/StarRating';
import Button from '../custom_components/Button';

const styles = {
    spaced: {
        marginLeft: 40,
        marginRight: 40
    }
};

export default class Feedback extends React.Component {
    static propTypes = {
        toggleModal: PropTypes.func.isRequired,
        navigator: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            imageSource: null
        };

        this._showImagePicker = this._showImagePicker.bind(this);
        this._shareFeedback = this._shareFeedback.bind(this);
    }

    _showImagePicker() {
        const options = {
            title: 'Select event image',
            quality: 1,
            maxWidth: 500,
            maxHeight: 500,
            allowsEditing: true,
            storageOptions: {
                skipBackup: true,
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            if( response.uri ) {
                this.setState({
                    imageSource: {
                        uri: response.uri.replace('file://', ''),
                        isStatic: true
                    }
                });
            }
        });
    }

    _shareFeedback() {
        this.props.toggleModal(true);

        // TODO: Fixme
        setTimeout(() => {
            this.props.toggleModal(false);

            setTimeout(() => {
                alert("Thanks for your feedback!");
                this.props.navigator.push(Router.ROUTES.Share);
            }, 500);

        }, 700);
    }

    render() {
        return (
            <ScrollView contentContainerStyle={[{flex: 1, backgroundColor: '#fff'}, Styles.centered]}>
                <Text style={[Styles.headerTitle]}>Finished RHoKing!</Text>

                <Text>What do you think about the volunteer event?</Text>

                <View style={Styles.row}>
                    <TextInput
                        multiline={true}
                        style={Styles.InputBox}
                    />
                </View>

                <StarRating
                    style={[Styles.spacedTop, Styles.spacedBottom]}
                    onNewCount={(newCount) => Keyboard.dismiss()}
                />

                {this.state.imageSource
                    ? <Image
                        style={[Styles.avatar, {alignSelf: 'center'}]}
                        source={this.state.imageSource}
                    />
                    : null
                }

                <View style={Styles.row}>
                    <TouchableHighlight style={[Styles.button, styles.spaced]} underlayColor={'#6F48C1'} onPress={this._showImagePicker}>
                        <View style={[Styles.row, {flex: 1, justifyContent: 'space-around'}]}>
                            <Icon name={'camera'} size={30} color={'#d7d7d7'} />

                            <Text style={Styles.buttonText}> Add a photo of the event</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <Button
                    title={'Send feedback'}
                    onPress={this._shareFeedback}
                    style={styles.spaced}
                />
            </ScrollView>
        );
    }
}
