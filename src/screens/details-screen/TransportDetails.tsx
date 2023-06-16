import React from 'react';
import {View, Button, Linking, StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {DetailsScreenProps} from '../main/types';
import {useTranslation} from 'react-i18next';
import {DetailsText} from '../../components/details-text/DetailsText';
import {Icon} from '../../components/icon/Icon';
import {getTransportImage} from '../../utils/getTransportImage';

export const TransportDetailsScreen = ({route}: DetailsScreenProps) => {
    const {t} = useTranslation();
    const {category, driver, phoneNumber, location} = route.params;

    const defaultMessage: string = 'Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе?'
    const handleCallPress = (): void => {
        Linking.openURL(`tel:${phoneNumber}`);
    };

    const handleWritePress = (): void => {
        Linking.openURL(`whatsapp://send?phone=${phoneNumber}&text=${defaultMessage}`)
            .then(() => {
                console.log('Whatsapp opened');
            })
            .catch(() => {
                alert('Make sure Whatsapp installed on your device');
            })
    };

    return (
        <View>
            <MapView
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005, // Adjust the value to change the zoom level
                    longitudeDelta: 0.005, // Adjust the value to change the zoom level
                }}
            >
                <Marker
                    coordinate={location}

                >
                    <Icon src={getTransportImage(category)!}/>
                </Marker>
            </MapView>
            <DetailsText title={'category'} text={category}/>
            <DetailsText title={'driver'} text={driver}/>
            <DetailsText title={'phone'} text={phoneNumber}/>

            <Button title={t('call')} onPress={handleCallPress}/>
            <Button title={t('write')} onPress={handleWritePress}/>

        </View>
    );
};


const styles = StyleSheet.create({
    map: {
        width: '90%',
        height: 300,
        alignSelf: 'center',
        marginVertical: 20,
    }
})