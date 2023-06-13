import React from 'react';
import {
    Button,
    Dimensions,
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Root, useAppNavigation} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../header/Header';
// import {TipsScreen} from '../tips/TipsScreen';
// import {InboxScreen} from '../inbox/InboxScreen';
// import {ProfileScreen} from '../profile/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransportsList} from '../transport-list/TransportsList';
import {Map} from '../map/Map';
import {Settings} from '../settings/Settings';
import {initReactI18next, useTranslation} from 'react-i18next';
import {TransportDetailsScreen} from '../transport/TransportDetails';
import {NavigationContainer} from '@react-navigation/native';
import i18n from 'i18next';

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
                call: "Call",
                write: "Write",
                home: "Home",
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
                call: "Позвонить",
                write: "Написать",
                home: "Главная",
            },
        },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

const Stack = createNativeStackNavigator<Root>();


export const Main = () => {
    const {t} = useTranslation();

    return (
        <View style={styles.container}>
            <Header/>

            <NavigationContainer>

                <Stack.Navigator>
                    <Stack.Screen name={'Home'}
                                  component={() => (
                                      <React.Suspense fallback={<LoadingIndicator/>}>
                                          <TransportsList/>
                                      </React.Suspense>
                                  )}
                        //@ts-ignore
                        //           options={{title: t('home')}
                        //           }
                    />
                    <Stack.Screen name={'Details'} component={TransportDetailsScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    );
};

export type DataFilterType = {
    id: number;
    title: string;
    imgSrc: string;
}


export const LoadingIndicator = () => {
    return <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/*<ActivityIndicator size="large" color="#ff385c"/>*/}
        loading...
    </View>

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 65,
    },
    dataFilter: {
        padding: 5,
    },
    imgSmall: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
    },
    filterText: {
        textAlign: 'center',
    },
    bold: {
        fontWeight: '700',
    },
    date: {
        fontWeight: '300',
        fontStyle: 'italic',
    },
    item: {
        marginVertical: 5,
        display: 'flex',
    },
    // img: {
    //     backgroundColor: '#7df5f5',
    //     width: (WIDTH - 2 * PADDING),
    //     height: (HEIGHT / 2.5),
    // },
    screenContainer: {
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
