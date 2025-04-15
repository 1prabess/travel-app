import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Title from '../../components/title';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title text="My first react-native app" />
      </View>
    </SafeAreaView>
  );
};

export default React.memo(Home);
