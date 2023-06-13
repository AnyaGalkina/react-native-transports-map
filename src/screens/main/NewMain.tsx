import {useTranslation} from 'react-i18next';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../header/Header';


export const NewMain = () => {
    // const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <Header/>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
            <Text>abc</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 65,
    }
});

