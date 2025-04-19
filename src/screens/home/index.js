import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView} from 'react-native';
import Title from '../../components/title';
import styles from './styles';
import Categories from '../../components/categories';
import AttractionCard from '../../components/attractionCard';
import attractionsJSON from '../../assets/data/attractions.json';
import categoriesJSON from '../../assets/data/categories.json';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [attractionsData, setAttractionsData] = useState([]);

  const handleSelectCategory = category => {
    setSelectedCategory(category);
    setAttractionsData(attractionsJSON);
  };

  useEffect(() => {
    console.log(attractionsData);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Title text="Explore Attractions" />
            <Categories
              selectedCategory={selectedCategory}
              onCategoryPress={handleSelectCategory}
              categories={['All', ...categoriesJSON]}
            />
          </>
        }
        data={
          selectedCategory === 'All'
            ? attractionsJSON
            : attractionsData.filter(attraction =>
                attraction.categories.includes(selectedCategory),
              )
        }
        keyExtractor={item => String(item?.id)}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          gap: 5,
          marginBottom: 10,
        }}
        renderItem={({item}) => (
          <AttractionCard
            onNavigate={() =>
              navigation.navigate('AttractionDetails', {item: item})
            }
            key={item.id}
            imageSrc={item.images[0]}
            title={item.name}
            country={item.country}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Home);
