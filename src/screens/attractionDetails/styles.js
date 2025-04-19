import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexGrow: 1,
  },

  imageContainer: {
    position: 'relative',
  },

  mainImage: {
    width: '100%',
    height: height / 2.5,
    borderRadius: 10,
  },

  backIconContainer: {
    position: 'absolute',
    top: '4%',
    left: '4%',
  },

  shareIconContainer: {
    position: 'absolute',
    top: '4%',
    right: '4%',
  },

  icon: {
    width: 40,
    height: 40,
  },

  images: {
    position: 'absolute',
    bottom: '4%',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  miniImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: 'cover',
  },

  details: {
    marginTop: 15,
  },

  headings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  city: {
    marginTop: 4,
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },

  addressBox: {
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  locationIcon: {
    width: 20,
    height: 20,
  },

  address: {
    fontSize: 14,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default styles;
