import React from 'react';
import {Root} from '../main/types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from '../settings-screen/Settings';
import {useTranslation} from 'react-i18next';
import {Icon} from '../../components/icon/Icon';
import {HomeScreen} from '../home-screen/HomeScreen';

const dataFooter = [
    {
        id: 1,
        component: HomeScreen,
        itemName: 'Home' as keyof Root,
        title: 'home',
        imgSrc: require('../../assets/images/home.png')
    },
    {
        id: 2,
        component: SettingsScreen,
        itemName: 'Settings' as keyof Root,
        title: 'settings',
        imgSrc: require('../../assets/images/settings.png')
    },
];

const Tab = createBottomTabNavigator<Root>();

export const Nav = () => {
    const {t} = useTranslation();

    return (
        <Tab.Navigator>
            {dataFooter.map(({id, title, component, imgSrc, itemName}) => {
                return (
                    <Tab.Screen key={id}
                                name={itemName}
                                component={component}
                                options={{
                                    headerShown: false,
                                    //@ts-ignore
                                    title: t(title),
                                    tabBarIcon: ({size, focused, color}) => {
                                        return (
                                            <Icon src={imgSrc} height={size} width={size}/>
                                        );
                                    },
                                }}
                    />
                )
            })}
        </Tab.Navigator>
    );
};
