import {NavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Root = {
    Home: undefined;
    Transport: undefined;
    Details: DetailsType;
    Map: undefined;
    Settings: undefined;
}

export type DetailsType = {
    category: string;
    driver: string;
    phoneNumber: string;
    location: LocationType;
}

type LocationType = {
    latitude: number;
    longitude: number;
}

export type DetailsScreenProps = NativeStackScreenProps<Root, 'Details'>

// useAppNavigation hook helper
type UseNavigationType = NavigationProp<Root>

export const useAppNavigation = () => useNavigation<UseNavigationType>()


