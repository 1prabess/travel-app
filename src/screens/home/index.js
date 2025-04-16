import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';
import Categories from '../../components/categories';
import AttractionCard from '../../components/attractionCard';
import attractionsJSON from '../../assets/data/attractions.json';

const Home = () => {
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
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Explore Attractions" />

        {/* <Text
          style={{
            marginTop: 25,
            marginBottom: 20,
            fontSize: 24,
          }}>
          Explore Attractions
        </Text> */}

        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={handleSelectCategory}
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exlcusive',
            'Others',
          ]}
        />

        <ScrollView contentContainerStyle={styles.row}>
          {attractionsData?.map(attraction => (
            <AttractionCard
              key={attraction.id}
              imageSrc={attraction.images[0]}
              title={attraction.name}
              country={attraction.country}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
