import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

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
    fontSize: 16,
    marginTop: 5,
    marginBottom: 7,
  },

  subtitle: {
    fontSize: 14,
    color: 'grey',
  },
});

export default styles;
