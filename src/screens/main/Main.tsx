import React from 'react';
import {initReactI18next} from 'react-i18next';
import {NavigationContainer} from '@react-navigation/native';
import i18n from 'i18next';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Nav} from '../navigation/Nav';
import {CustomStatusBar} from '../../components/costumStatusBar/CustomStatusBar';
import {Header} from '../../components/header/Header';


i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                transport: 'Transport',
                driver: 'Driver',
                category: 'Category',
                categoryA: 'Cargo',
                categoryB: 'Passenger',
                categoryC: 'Special',
                submit: 'Submit',
                call: 'Call',
                write: 'Write',
                home: 'Home',
                settings: 'Settings',
                sort: 'Filter by:',
                all: 'All',
                details: 'Details',
                phone: "Phone",
            },
        },
        ru: {
            translation: {
                transport: 'Название ТС',
                driver: 'Имя водителя',
                category: 'Категория ТС',
                categoryA: 'Грузовой',
                categoryB: 'Пассажирский',
                categoryC: 'Спецтранспорт',
                submit: 'Применить',
                call: 'Позвонить',
                write: 'Написать',
                home: 'Главная',
                settings: 'Настройки',
                sort: 'Фильтр',
                all: 'Все',
                details: 'Подробнее',
                phone: "Телефон",
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export const Main = () => {

    return (
        <SafeAreaProvider>
            <CustomStatusBar backgroundColor="#2c435b"/>

            <Header/>

            <NavigationContainer>
                <Nav/>
            </NavigationContainer>

        </SafeAreaProvider>
    );
};

