import React from 'react';
import {View, FlatList, ListRenderItem} from 'react-native';
import {DataTable} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {TransportsType} from '../TransportsList';
import {useAppNavigation} from '../../../main/types';

type PropsType = {
    transports: TransportsType[];
}

export const Table = ({transports}: PropsType) => {
    const {t} = useTranslation();
    const {navigate} = useAppNavigation();

    const renderItem: ListRenderItem<TransportsType> = ({item}) => {
        const {category, driver, phoneNumber, transport, longitude, latitude} = item

        const handleDetails = (): void => {
            navigate('Details', {category, driver, phoneNumber, location: {latitude, longitude}})
        }

        return (
            <View style={{flex: 1}}>
                <DataTable.Row>
                    <DataTable.Cell onPress={handleDetails}>
                        {transport}
                    </DataTable.Cell>
                    <DataTable.Cell>{driver}</DataTable.Cell>
                    <DataTable.Cell>{t(category)}</DataTable.Cell>
                </DataTable.Row>
            </View>
        )
    }


    return (
        <DataTable style={{flex: 1}}>
            <DataTable.Header>
                <DataTable.Title>{t('transport')}</DataTable.Title>
                <DataTable.Title>{t('driver')}</DataTable.Title>
                <DataTable.Title>{t('category')}</DataTable.Title>
            </DataTable.Header>

            <FlatList
                data={transports}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </DataTable>

    );
};
