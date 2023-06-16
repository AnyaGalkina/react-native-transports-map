import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Sort} from './sort/Sort';
import {Map} from './map/Map';
import {Table} from './table/Table';
import {Icon} from '../../../components/icon/Icon';
import transports from '../../../assets/data/transports.json';

export type TransportsType = {
    transport: string;
    driver: string;
    category: string;
    latitude: number;
    longitude: number;
    phoneNumber: string;
}

export const TransportsList = () => {

    const [format, setFormat] = useState<'list' | 'map'>('list');
    const [data, setData] = useState<TransportsType[]>(transports.transports);
    const [sortedData, setSortedData] = useState<TransportsType[]>([]);

    const renderTransports = sortedData.length > 0 ? sortedData : data

    const onSortClick = (category: string): void => {
        if (category === 'all') {
            setSortedData([]);
            return;
        } else {
            const filteredTransports = data.filter((item) => item.category === category);
            setSortedData(filteredTransports);
        }
    };

    const handleFormatToggle = () => {
        const newFormat = format === 'list' ? 'map' : 'list';
        setFormat(newFormat);
    };

    return (
        <View style={{flex: 1, padding: 16}}>

            <Sort onSortClick={onSortClick}/>


            <View style={styles.icons}>
                <TouchableOpacity onPress={handleFormatToggle}>
                    <Icon
                        src={format === 'list' ? require('../../../assets/images/map.png') : require('../../../assets/images/list.png')}/>
                </TouchableOpacity>
            </View>

            {format === 'list'
                ? <Table transports={renderTransports}/>
                : <Map transports={renderTransports}/>
            }

        </View>
    );
};


const styles = StyleSheet.create({
    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        padding: 10
    }
})