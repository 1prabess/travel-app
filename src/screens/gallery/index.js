import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Gallery = ({route}) => {
  const images = route.params.images || [];
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.icon} source={require('../../assets/back.png')} />
      </TouchableOpacity>
      <FlatList
        data={images}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => item || String(index)}
        renderItem={({item}) => (
          <Image style={styles.images} source={{uri: item}} />
        )}
      />
    </SafeAreaView>
  );
};

export default React.memo(Gallery);
