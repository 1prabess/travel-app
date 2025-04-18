import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Text} from 'react-native';

const AttractionDetails = ({route}) => {
  const navigation = useNavigation();
  const {item} = route?.params || {};
  return (
    <SafeAreaView>
      <Text onPress={() => navigation.goBack()}>Back</Text>
      <Text>{item?.name}</Text>
    </SafeAreaView>
  );
};

export default React.memo(AttractionDetails);
