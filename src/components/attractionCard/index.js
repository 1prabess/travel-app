import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const AttractionCard = ({imageSrc, title, country, onNavigate}) => {
  return (
    <TouchableOpacity onPress={onNavigate} style={styles.card}>
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
    </TouchableOpacity>
  );
};

export default AttractionCard;
