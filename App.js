import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/home';

function App() {
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  safeView: {
    backgroundColor: 'blue',
  },

  view: {
    backgroundColor: 'royalblue',
  },
});

export default App;
