import React from 'react';

import {
    TouchableOpacity,
    Text,
    Linking,
} from 'react-native';

import Styles from './Styles';

class Util {
    static MAP_TYPE_DYNAMIC = 1;
    static MAP_TYPE_STATIC = 2;

    // TODO: Move this onto the server side.
    static MAP_API_KEY = 'AIzaSyC_dnbwp8SHOWgpSFGkFGUmrYNEy2zub5s';

    static *entries(obj) {
        for( let key of Object.keys(obj) ) {
            yield [ key, obj[ key ] ];
        }
    }

    static buildGoogleMapsURL(address, mapType = Util.MAP_TYPE_DYNAMIC) {
        if( mapType === Util.MAP_TYPE_STATIC ) {
            return encodeURI(`https://maps.googleapis.com/maps/api/staticmap?size=300x100&markers=|${address}&key=${Util.MAP_API_KEY}`);
        }

        return 'https://maps.google.com/?q=' + address;
    }

    static _createLink(content, url, onPress) {
        return (
            <TouchableOpacity
                style={[Styles.inline, {flex: 1, alignItems: 'center'}]}
                onPress={() => onPress ? onPress() : Linking.openURL(url)}
            >
                {typeof content === 'string'
                    ? <Text style={[Styles.contactView, {color: '#34B3A0'}]}>{content}</Text>
                    : content
                }
            </TouchableOpacity>
        );
    }
}

export default Util;
