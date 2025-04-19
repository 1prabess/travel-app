import {Dimensions, StyleSheet} from 'react-native';
const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexGrow: 1,
  },

  images: {
    width: '100%',
    height: height / 2,
    marginBottom: 15,
    borderRadius: 15,
  },

  icon: {
    width: 40,
    height: 40,
  },
});

export default styles;
