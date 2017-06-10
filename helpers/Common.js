/**
 * Created by dejan on 10/6/17.
 */

import Styles from './Styles';

export default class Common {
    static dropdownProps = {
        style: Styles.dropDown,
        modalStyle: {backgroundColor: 'rgba(52, 52, 52, 0.9)'},
        iconContainerStyle: {backgroundColor: '#6445b3'},
        dropdownItemStyle: {color: '#fff'},
        iconStyle: [ {color: '#fff'} ],
        closeIconStyle: {
            color: '#fff',
            fontSize: 20
        }
    };
}
