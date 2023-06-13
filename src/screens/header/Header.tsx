import {
    View,
    StyleSheet
} from 'react-native';
import React from 'react';
import {WIDTH} from '../../constants/constants';

export const Header = () => {

    return (
        <View style={styles.header}></View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2c435b',
        zIndex: 3,
        width: WIDTH,
        height: 100,
    },
});
