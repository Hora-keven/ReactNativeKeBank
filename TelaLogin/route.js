import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Login from './pages/Login'
import LoginUser from './pages/Login/loginolduser.js'
import FirstScreen from './pages/Screens/home.js'

const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <stack.Screen name='First' component={FirstScreen} options={{ headerShown: false }} />
        <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <stack.Screen name='Login_old_user' component={LoginUser} options={{ headerShown: false }} />
      
      </stack.Navigator>

    </NavigationContainer>
  );
}

