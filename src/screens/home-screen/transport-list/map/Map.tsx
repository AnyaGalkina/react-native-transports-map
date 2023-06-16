import React from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {TransportsType} from '../TransportsList';
import {Icon} from '../../../../components/icon/Icon';
import {getTransportImage} from '../../../../utils/getTransportImage';

type PropsType = {
    transports: TransportsType[];
}

export const Map = ({transports}: PropsType) => {

    return (
        <View style={{flex: 1}}>
            <MapView
                style={{flex: 1}}
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {transports.map((item, index) => (
                    <Marker
                        key={index}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                    >
                        <Icon src={getTransportImage(item.category)!}/>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};
