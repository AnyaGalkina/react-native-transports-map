import {I18nextProvider} from 'react-i18next';
import i18n from 'i18next';
import {Main} from './src/screens/main/Main';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'expo-status-bar';
import {CustomStatusBar} from './src/screens/costumStatusBar/CustomStatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default function App() {
    return (
        <I18nextProvider i18n={i18n}>
            {/*<SafeAreaProvider>*/}
            {/*    <CustomStatusBar backgroundColor="#2c435b"/>*/}
                {/*<NavigationContainer>*/}
                    <Main/>
                {/*</NavigationContainer>*/}
            {/*</SafeAreaProvider>*/}
        </I18nextProvider>
    );
}
