
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import Home from './pages/Home'
import Login from './pages/Login'

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='home' component={Home}/>
        <stack.Screen name='login' component={Login}/>
      </stack.Navigator>

    </NavigationContainer>
  );
}


