import React from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { View, Text, Switch } from 'react-native';

// i18n.use(initReactI18next).init({
//     resources: {
//         en: {
//             translation: {
//                 transport: 'Transport',
//                 driver: 'Driver',
//                 category: 'Category',
//                 categoryA: 'Cargo',
//                 categoryB: 'Passenger',
//                 categoryC: 'Special',
//                 submit: 'Submit',
//                 // call: "Call",
//                 // write: "Write",
//                 // home: "Home",
//             },
//         },
//         ru: {
//             translation: {
//                 transport: 'Название ТС',
//                 driver: 'Имя водителя',
//                 category: 'Категория ТС',
//                 categoryA: 'Грузовой',
//                 categoryB: 'Пассажирский',
//                 categoryC: 'Спецтранспорт',
//                 submit: 'Применить',
//                 // call: "Позвонить",
//                 // write: "Написать",
//                 // home: "Главная",
//             },
//         },
//     },
//     lng: 'en',
//     fallbackLng: 'en',
//     interpolation: {
//         escapeValue: false,
//     },
// });

export const Settings = () => {
    const { t, i18n } = useTranslation();

    const handleLanguageChange = () => {
        const newLanguage = i18n.language === 'en' ? 'ru' : 'en';
        i18n.changeLanguage(newLanguage);
    };

    return (
        <View style={{ alignItems: 'flex-end', marginTop: 16 }}>
            <Switch value={i18n.language === 'ru'} onValueChange={handleLanguageChange} />
            <Text>{i18n.language === 'ru' ? 'RU' : 'EN'}</Text>
        </View>
    );
};
