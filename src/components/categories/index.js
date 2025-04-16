import React from 'react';
import {FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './style';

const Categories = ({categories, selectedCategory, onCategoryPress}) => {
  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => onCategoryPress(item)}>
          <Text
            style={[
              styles.item,
              selectedCategory === item ? styles.selectedItem : {},
            ]}>
            {item}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Categories;
