/**
 * Created by dejan on 13/1/17.
 */

const ReactNative = require('react-native');

const {
    StyleSheet,
    Platform,
    Dimensions
} = ReactNative;

const TEXT_COLOR = '#1F3F55';
const DEVICE_WIDTH = Dimensions.get('window').width;

const navHeight = Platform.OS === 'ios'? 64 : 54; // nav bar height

const Styles = StyleSheet.create({
    container: {
        marginTop: navHeight,
        backgroundColor: '#fff',
        flex: 1,
    },
    badge: {
        height: 40,
        width: 40,
    },
    containerAfter: {
        backgroundColor: '#E9EBEA',
        flex: 1
    },
    header: {
        flex: 1,
        marginVertical: 35
    },
    headerTitle: {
        color: TEXT_COLOR,
        fontSize: 20,
        flexWrap: 'wrap',
        width: DEVICE_WIDTH - 50,
        textAlign: 'center'
    },
    logo: {
        borderRadius: 20,
        height: 120,
        width: 120,
        marginBottom: 30,
    },
    headerImage: {
        marginTop: 20,
        width: 100,
        height: 100,
        borderRadius: 50
    },
    content: {
        flex: 2,
        alignItems: 'center'
    },
    centered: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignCenter: {
        alignSelf: 'center',
    },
    paddedSmall: {
        padding: 15
    },
    padded: {
        padding: 30
    },
    margin: {
        marginLeft: 20,
        marginRight: 20,
    },
    accordionHeader: {
        padding: 10,
        backgroundColor: '#34B3A0'
    },
    accordionHeaderText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#fff',
        height: 50,
        paddingTop: 13,
        alignItems: 'center',
        justifyContent: 'center',
//        fontFamily: 'questrial',
    },
    accordionContent: {
        padding: 10,
        backgroundColor: '#E9EBEA'
    },
    textContainer: {
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    contactName: {
        fontSize: 20,
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    contactAddress: {
        fontSize: 14,
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 7,
        paddingBottom: 7
    },
    rowSmall: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    androidNavBar: {
        height: navHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#c4c4c4'
    },
    androidNavBarStatusBarText: {
        fontSize: 24,
        color: '#fff'
    },
    androidNavBarBackButton: {
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    inline: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    inlineNoGap: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    description: {
        fontSize: 16,
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    eventBody: {
        color: TEXT_COLOR
    },
    button: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#6445b3',
        borderColor: '#6445b3',
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonWarning: {
        backgroundColor: '#ff871e',
        borderColor: '#ff871e',
    },
    buttonText: {
        fontSize: 16,
        color: '#fff',
        alignSelf: 'center',
//        fontFamily: 'questrial',
    },
    buttonInverted: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#6445b3',
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonInvertedText: {
        fontSize: 16,
        color: '#6445b3',
        alignSelf: 'center',
//        fontFamily: 'questrial',
    },
    buttonDisabled: {
        height: 50,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#7a787a',
        borderColor: '#c4c4c4',
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    buttonEvents: {
        height: 70,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#c4c4c4',
        borderWidth: 1,
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    buttonEventsHeading: {
        fontSize: 18,
        color: '#34B3A0',
        flexWrap: 'wrap',
//        fontFamily: 'questrial',
    },
    buttonEventsText: {
        fontSize: 14,
        color: '#34B3A0',
        alignSelf: 'center',
    },
    datePicker: {
        paddingTop: 4,
        height: 50
    },
    Input: {
        height: 50,
        padding: 4,
        paddingLeft: 20,
        flex: 4,
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#6445b3',
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    InputBox: {
        height: 100,
        padding: 4,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 4,
        fontSize: 16,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#34B3A0',
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    dropDown: {
        flex: 1,
        height: 50,
        paddingLeft: 20,
        borderWidth: 1,
        backgroundColor: '#fff',
        borderColor: '#6445b3'
    },
    icon: {
        color: TEXT_COLOR,
    },
    iconTeal: {
        color: '#34B3A0',
    },
    iconWhite: {
        color: '#fff',
    },
    iconSmall: {
        fontSize: 16,
    },
    iconMid: {
        fontSize: 18,
    },
    iconLarge: {
        fontSize: 40,
    },
    iconHuge: {
        fontSize: 100,
    },
    contactViewHeading: {
        fontSize: 18
    },
    contactView: {
        color: TEXT_COLOR,
        padding: 3,
        width: 240,
//        fontFamily: 'questrial',
    },
    profileDetails: {
        alignSelf: 'stretch',
        justifyContent: 'center'
    },
    title: {
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    textBodyContainer: {
        marginLeft:20,
        marginRight:20,
    },
    bodyKey: {
        color: '#c2c2c2',
    },
    bodyValue: {
        flex: 1,
        flexDirection:'row',
        flexWrap: 'wrap',
        color: TEXT_COLOR,
//        fontFamily: 'questrial',
    },
    avatar: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        width: 200,
        height: 200
    },
    spacedTop: {
        marginTop: 10
    },
    spacedBottom: {
        marginBottom: 10
    },
    link: {
        color: '#0C42FD'
    },
    staticMap: {
        marginTop: 5,
        height: 100,
    },
    contactProfileImage: {
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        height: 100,
        width: 100,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 20,
    },
    contactProfileImageSmall: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
});

Styles.datePickerCustom = {
    dateInput: {
        height: 50,
        backgroundColor: '#fff',
        borderColor: '#34B3A0',
        alignItems: 'flex-start',
        paddingLeft: 20
    },
    dateText: {
        fontSize: 16,
        color: '#1F3F55',
    },
    placeholderText: {
        fontSize: 16,
    },
    btnTextText: {
        color: '#34B3A0',
    }
};

export default Styles
