import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {DetailsType, useAppNavigation} from '../main/types';
import {Sort} from './sort/Sort';

export type TransportsType = {
    transport: string;
    driver: string;
    category: string;
    latitude: number;
    longitude: number;
    phoneNumber: string;

}

let phoneNumberDefault = '+7 999 999 99 99';

export const transports: TransportsType[] = [
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
    const [sortedData, setSortedData] = useState<TransportsType[]>([]);
    const {t} = useTranslation();


    const onSortClick = (category: string): void => {
        if (category === 'all') {
            setSortedData([]);
            return;
        } else {
            const filteredTransports = transports.filter((item) => item.category === category);
            setSortedData(filteredTransports);
        }
    };

    const handleDetails = ({category, driver, phoneNumber}: DetailsType): void => {
        navigate('Details', {category, driver, phoneNumber})
    }

    return (
        <View style={{flex: 1, padding: 16}}>

            <Sort onSortClick={onSortClick}/>

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
