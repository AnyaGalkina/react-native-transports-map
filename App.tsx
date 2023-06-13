import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import {Main} from './src/screens/main/Main';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';



export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <Main/>
        </I18nextProvider>
    );
}
