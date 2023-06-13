import React from 'react';
import { View, Text, Button, Linking } from 'react-native';
import {DetailsScreenProps, DetailsType} from '../main/types';

export const TransportDetailsScreen = ({route}: DetailsScreenProps) => {

    const {category, driver, phoneNumber } = route.params;
    const handleCallPress = (): void => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleWritePress = (): void => {
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе?`);
    };

    return (
        <View>
            <Text>Category: {category}</Text>
            <Text>Driver: {driver}</Text>
            <Text>Phone: {phoneNumber}</Text>
            <Button title="Call" onPress={handleCallPress} />
            <Button title="Write" onPress={handleWritePress} />
        </View>
    );
};
