import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#E2E2E2',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  icon: {
    width: 12,
    height: 12,
  },

  details: {
    padding: 8,
  },

  image: {
    width: (width - 80) / 2,
    height: 120,
  },

  title: {
    fontWeight: 'bold',
    marginTop: 7,
    marginBottom: 5,
  },

  subtitle: {
    color: 'grey',
  },
});

export default styles;
