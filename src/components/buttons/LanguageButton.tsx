import React from 'react';
import {Icon} from '../icon/Icon';
import {ImageSourcePropType, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {useTranslation} from 'react-i18next';

type PropsType = {
    handleLanguageChange: (newLanguage: 'en' | 'ru') => void;
    newLanguage: 'en' | 'ru';
    imgSrc: ImageSourcePropType;
    text: string;
}

export const LanguageButton = ({imgSrc, handleLanguageChange, newLanguage, text }: PropsType) => {
    const {t,i18n } = useTranslation();

 const finalStyle = i18n.language === newLanguage
     ? {...styles.selectedButton, ...styles.languageButton}
     : {...styles.unselectedButton, ...styles.languageButton};

    return (
        <TouchableOpacity style={finalStyle} onPress={() => handleLanguageChange(newLanguage)}>
            <Icon src={imgSrc}/>
            <Text style={styles.languageButtonText}>{t(text)}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    languageButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        marginRight: 8,
    },
    unselectedButton:{
        backgroundColor: '#f2f2f2',
    },
    selectedButton:{
        backgroundColor: '#86929f',
    },
    languageButtonText: {
        marginLeft: 8,
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 8,
    },
    flagIcon: {
        marginLeft: 8,
    },
});

