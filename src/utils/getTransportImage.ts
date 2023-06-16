import {ImageSourcePropType} from 'react-native';

export const getTransportImage = (category: string): ImageSourcePropType | undefined => {
    if (category === 'categoryA') return require('../assets/images/categoryA.png');
    if (category === 'categoryB') return require('../assets/images/categoryB.png');
    if (category === 'categoryC') return require('../assets/images/categoryC.png');
}
