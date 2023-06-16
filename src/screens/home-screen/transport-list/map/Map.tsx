import React from 'react';
import {View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {TransportsType} from '../TransportsList';
import {Icon} from '../../../../components/icon/Icon';

type PropsType = {
    transports: TransportsType[];
}

export const Map = ({transports}: PropsType) => {

    const getFinalImgSrc = (category: string) => {
        if (category === 'categoryA') return require('../../../assets/images/categoryA.png');
        if (category === 'categoryB') return require('../../../assets/images/categoryB.png');
        if (category === 'categoryC') return require('../../../assets/images/categoryC.png');
    }
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
                        <Icon src={getFinalImgSrc(item.category)}/>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
};
