import React from 'react';
import {TransportDetailsScreen} from '../details-screen/TransportDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Root} from '../main/types';
import {TransportsList} from './transport-list/TransportsList';
import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<Root>();

export const HomeScreen = () => {
    const {t} = useTranslation();

    return (
        <Stack.Navigator>
            <Stack.Screen
                name={'Transport'}
                component={TransportsList}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen name={'Details'}
                          component={TransportDetailsScreen}
                          options={{
                              //@ts-ignore
                              title: t('details')
                          }}
            />
        </Stack.Navigator>
    );
};
