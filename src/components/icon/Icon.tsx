import React from 'react';
import {Image, ImageSourcePropType} from 'react-native';

type PropsType = {
    src: ImageSourcePropType;
    height?: number;
    width?: number;
}

export const Icon = ({src, height, width}: PropsType) => {
    return (
        <Image source={src} style={{width: width ? width : 40, height: height ? height : 40}}/>
    );
};
