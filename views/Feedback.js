import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

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
    constructor(props) {
        super(props);

        this.state = {
            imageSource: null
        };

        this._showImagePicker = this._showImagePicker.bind(this);
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
            this.setState({
                avatarSource: {
                    uri: response.uri.replace('file://', ''),
                    isStatic: true
                }
            });
        });
    }

    render() {
        return (
            <View style={[Styles.container, Styles.centered, Styles.padded]}>
                <Text>What do you think about the volunteer event?</Text>

                <View style={Styles.row}>
                    <TextInput
                        multiline={true}
                        style={Styles.InputBox}
                    />
                </View>

                <StarRating style={[Styles.spacedTop, Styles.spacedBottom]} />

                {this.state.imageSource
                    ? <Image
                        style={Styles.avatar}
                        source={this.state.imageSource}
                    />
                    : null
                }

                <View style={Styles.row}>
                    <TouchableHighlight style={[Styles.button, styles.spaced]} underlayColor={'#6F48C1'} onPress={this._showImagePicker}>
                        <View style={Styles.row}>
                            <Icon name={'camera'} size={30} color={'#d7d7d7'} />
                            <Text style={{color: '#fff'}}> Add a photo of the event</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <Button
                    title={'Share feedback'}
                    onPress={() => {}}
                    style={styles.spaced}
                />
            </View>
        );
    }
}
