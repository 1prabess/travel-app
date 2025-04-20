import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

const AttractionDetails = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params || {};
  const mainImage = item?.images[0] || null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.mainImage} source={{uri: mainImage}} />
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => navigation.goBack()}>
          <Image
            style={styles.icon}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareIconContainer}>
          <Image
            style={styles.icon}
            source={require('../../assets/share.png')}
          />
        </TouchableOpacity>

        <Pressable
          onPress={() => navigation.navigate('Gallery', {images: item?.images})}
          style={styles.images}>
          {item?.images?.map((image, index) => {
            return (
              <Image
                style={styles.miniImage}
                key={index}
                source={{uri: image}}
              />
            );
          })}
        </Pressable>
      </View>
      <View style={styles.details}>
        <View style={styles.headings}>
          <View style={{}}>
            <Text style={styles.name}>{item?.name}</Text>
            <Text style={styles.city}>{item?.city}</Text>
          </View>
          <Text style={styles.name}>{item?.entry_price}</Text>
        </View>

        <View style={styles.addressBox}>
          <Image
            source={require('../../assets/location.png')}
            style={styles.locationIcon}
          />
          <Text style={styles.address}>{item?.address}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
