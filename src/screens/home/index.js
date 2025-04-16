import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Title from '../../components/title';
import styles from './styles';
import Categories from '../../components/categories';
import AttractionCard from '../../components/attractionCard';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSelectCategory = category => {
    setSelectedCategory(category);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />

        <Text
          style={{
            marginTop: 25,
            marginBottom: 20,
            fontSize: 24,
          }}>
          Explore Attractions
        </Text>

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

        <View style={styles.row}>
          <AttractionCard
            imageSrc="https://images.unsplash.com/photo-1513614835783-51537729c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="National park."
          />

          <AttractionCard
            imageSrc="https://images.unsplash.com/photo-1513614835783-51537729c8ba?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="National park "
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
