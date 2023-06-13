import React, {useState} from 'react';
import {View, FlatList, Button} from 'react-native';
import {TextInput, DataTable} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {TransportDetailsScreen} from '../transport/TransportDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsType, useAppNavigation} from '../main/types';


let phoneNumberDefault = '+7 999 999 99 99';


const Stack = createNativeStackNavigator();
export const transports = [
    {
        transport: 'TC #1',
        driver: 'Driver 1',
        category: 'categoryB',
        latitude: 37.78825,
        longitude: -122.4324,
        phoneNumber: phoneNumberDefault
    },
    {
        transport: 'TC #2',
        driver: 'Driver 2',
        category: 'categoryA',
        latitude: 37.79825,
        longitude: -122.4224,
        phoneNumber: phoneNumberDefault
    },
    {
        transport: 'TC #3',
        driver: 'Driver 3',
        category: 'categoryC',
        latitude: 37.77825,
        longitude: -122.4424,
        phoneNumber: phoneNumberDefault
    },
]


export const TransportsList = () => {
    const {navigate} = useAppNavigation();

    const [data, setData] = useState(transports);
    const [sortedData, setSortedData] = useState([]);
    const {t} = useTranslation();


    const handleSort = (): void => {
        const sorted = [...data].sort((a, b) => a.category.localeCompare(b.category));
        // @ts-ignore
        setSortedData(sorted);
    };

    const handleDetails = ({category, driver, phoneNumber}: DetailsType): void => {
        // console.log('handleDetails', category, driver, phoneNumber)
        // navigate('Details', {url: item.url})
        navigate('Details', {category, driver, phoneNumber})
    }

    return (
        <View style={{flex: 1, padding: 16}}>
            <Button title={t('submit')} onPress={handleSort}/>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>{t('transport')}</DataTable.Title>
                    <DataTable.Title>{t('driver')}</DataTable.Title>
                    <DataTable.Title>{t('category')}</DataTable.Title>
                </DataTable.Header>
                <FlatList
                    data={sortedData.length > 0 ? sortedData : data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <DataTable.Row>
                            <DataTable.Cell onPress={() =>
                                handleDetails({
                                    category: item.category,
                                    driver: item.driver,
                                    phoneNumber: item.phoneNumber
                                })
                            }>{item.transport}
                            </DataTable.Cell>
                            <DataTable.Cell>{item.driver}</DataTable.Cell>
                            <DataTable.Cell>{t(item.category)}</DataTable.Cell>
                        </DataTable.Row>
                    )}
                />
            </DataTable>
        </View>
    );
};
