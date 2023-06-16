import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {PADDING, WIDTH} from '../../constants/constants';

export const Header = () => {

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Transport App</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#2c435b',
        zIndex: 3,
        width: WIDTH,
        height: 80,
    },
    text: {
        padding: PADDING,
        color: '#fff',
        fontStyle: 'italic',
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'center',
    }
});
