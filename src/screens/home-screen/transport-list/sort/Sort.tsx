import React, {useState} from 'react';
import {Button, Pressable, Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';
import {PADDING, WIDTH} from '../../../../constants/constants';

// type CategoryType = 'categoryA' | 'categoryB' | 'categoryC';

type PropsType = {
    onSortClick: (category: string) => void
}

const categories = ['all', 'categoryA', 'categoryB', 'categoryC'];

export const Sort = ({onSortClick}: PropsType) => {
    const {t} = useTranslation();

    const defaultCategory = 'all';
    const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);

    const handleRadioButtonPress = (value: string): void => {
        setSelectedCategory(value);
    }

    const handleSort = (): void => {
        onSortClick(selectedCategory)
    };


    return (
        <View>
            <Text>{t('sort')}</Text>

            <View style={styles.options}>
                {categories.map((category) => (
                    <Pressable key={category}
                               style={category === selectedCategory ? {...styles.selected, ...styles.category} : {...styles.unselected, ...styles.category}}
                               onPress={() => handleRadioButtonPress(category)}>
                        <Text>{t(category)}</Text>
                    </Pressable>
                ))}
            </View>

            <Button title={t('submit')} onPress={handleSort}/>
        </View>
    );
};


const styles = StyleSheet.create({
    options: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    category: {
        width: (WIDTH - PADDING * 2) / 2,
        padding: 10,
        marginHorizontal: 2,
        marginVertical: 10,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#86929f',
        color: '#fff',
    },
    unselected: {
        backgroundColor: '#e7ecf5',
        color: '#000',
    }
})