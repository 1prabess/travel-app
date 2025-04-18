import './gesture-handler';
import attractionDetails from './src/screens/attractionDetails';
import gallery from './src/screens/gallery';
import Home from './src/screens/home';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AttractionDetails" component={attractionDetails} />
        <Stack.Screen name="Gallery" component={gallery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
