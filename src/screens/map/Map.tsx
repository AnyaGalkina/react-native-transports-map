import React from 'react';
import {View, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {transports} from '../transport-list/TransportsList';

export const Map = () => {

    const getFinalImgSrc = (category: string) => {
        if (category === 'categoryA') return require('../../assets/images/categoryA.png');
        if (category === 'categoryB') return require('../../assets/images/categoryB.png');
        if (category === 'categoryC') return require('../../assets/images/categoryC.png');
    }
    return (
        <View style={{flex: 1}}>
            <MapView
                style={{flex: 1}}
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
                        <Image source={getFinalImgSrc(item.category)} style={{width: 40, height: 40}}/>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};
