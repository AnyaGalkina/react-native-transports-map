import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useTranslation} from 'react-i18next';

type PropsType = {
    title: string
    text: string
}
export const DetailsText = ({title, text}: PropsType) => {
    const {t} = useTranslation();

    return (
        <Text style={styles.text}>
            <Text style={styles.boldText}> {t(title)}: </Text>
            {t(text)}
        </Text>
    );
};

const styles = StyleSheet.create({
    map: {
        width: '90%',
        height: 300,
        alignSelf: 'center',
        marginVertical: 20,
    },
    text: {
        marginHorizontal: 10,
        marginVertical: 5,
        fontSize: 16,
    },
    boldText: {
        fontWeight: 'bold',
    }
})
