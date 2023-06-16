import {useSafeAreaInsets} from 'react-native-safe-area-context';
import React from 'react';
import {StatusBar, View} from 'react-native';

type PropsType = {
    backgroundColor: string,
    barStyle?: 'light-content' | 'dark-content' | 'default' | undefined
}

export const CustomStatusBar = (
    {
        backgroundColor,
        barStyle = 'light-content',
    }: PropsType
) => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{height: insets.top, backgroundColor}}>
            <StatusBar
                animated={true}
                backgroundColor={backgroundColor}
                barStyle={barStyle}/>
        </View>
    );
}
