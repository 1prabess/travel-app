import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

const AttractionCard = ({imageSrc, title, country}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: imageSrc}} style={styles.image} />
      <View style={styles.details}>
        <Text style={[styles.title]}>{title}</Text>
        <View style={styles.row}>
          <Image
            source={require('../../assets/location.png')}
            style={styles.icon}
          />
          <Text style={styles.subtitle}>{country}</Text>
        </View>
      </View>
    </View>
  );
};

export default AttractionCard;
