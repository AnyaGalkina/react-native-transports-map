import React, {useState} from 'react';
import {Button, Pressable, Text, View, StyleSheet} from 'react-native';
import {useTranslation} from 'react-i18next';

// type CategoryType = 'categoryA' | 'categoryB' | 'categoryC';

type PropsType = {
    onSortClick: (category: string) => void
}

const categories = ['categoryA', 'categoryB', 'categoryC', 'All'];

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
            <Text>Sort by:</Text>

            {categories.map((category) => (
                <Pressable key={category}
                           style={category === selectedCategory ? {...styles.selected, ...styles.category} : {...styles.unselected, ...styles.category}}
                           onPress={() => handleRadioButtonPress(category)}>
                    <Text>{t(category)}</Text>
                </Pressable>
            ))}

            <Button title={t('submit')} onPress={handleSort}/>
        </View>
    );
};


const styles = StyleSheet.create({
    // container: {
    //     textAlign: 'center',
    // },
    category: {
        color: '#000',
        padding: 10,
        margin: 5,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selected: {
        backgroundColor: '#86929f',
    },
    unselected: {
        backgroundColor: '#e7ecf5',
    }
})