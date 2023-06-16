import React from 'react';
import {useTranslation} from 'react-i18next';
import {View, StyleSheet } from 'react-native';
import {LanguageButton} from '../../components/buttons/LanguageButton';

export const SettingsScreen = () => {
    const {t, i18n} = useTranslation();

    const handleLanguageChange = (newLanguage: 'en' | 'ru') => {
        i18n.changeLanguage(newLanguage);
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>

                <LanguageButton newLanguage={'en'}
                                handleLanguageChange={handleLanguageChange}
                                text={'English'}
                                imgSrc={require('../../assets/images/en.png')}
                />
                <LanguageButton newLanguage={'ru'}
                                handleLanguageChange={handleLanguageChange}
                                text={'Русский'}
                                imgSrc={require('../../assets/images/ru.png')}
                />

            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 16,
    }
});
