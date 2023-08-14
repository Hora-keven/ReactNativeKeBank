import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import Home from './pages/Home'
import Login from './pages/Login'
import LoginUser from './pages/Login/loginolduser.js'
import FirstScreen from './pages/Screens/home.js'

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen  name='first' component={FirstScreen} options={{headerShown:false}}/>
        <stack.Screen  name='home' component={Home} options={{headerShown:false}}/>
        <stack.Screen name='login' component={Login} options={{headerShown:false}}/>
        <stack.Screen name='login_old_user' component={LoginUser} options={{headerShown:false}}/>
     
      </stack.Navigator>

    </NavigationContainer>
  );
}

