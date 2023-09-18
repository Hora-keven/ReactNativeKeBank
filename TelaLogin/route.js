import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './pages/Home'
import Login from './pages/Login/signin'
import LoginUser from './pages/Login/Signup'
import FirstScreen from './pages/Screens/HomeFunc/home.js'
import ScreenPix from './pages/Screens/Pix'
import ScreenExtract from './pages/Screens/Extract'
import ScreenLoan from './pages/Screens/Loan/index'
import ScreenCards from './pages/Screens/Mycards'
import ScreenBox from './pages/Screens/Savebox'
import ScreenRecharge from './pages/Screens/Phonerecharge'
import ScreenApproved from './pages/Screens/Approved'
const stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
      <stack.Screen name='First' component={FirstScreen} options={{ headerShown: false }} />
      <stack.Screen name='ScreenCard' component={ScreenCards} options={{ headerShown: false }} />
      <stack.Screen name='Loan' component={ScreenLoan} options={{ headerShown: false }} />
      <stack.Screen name='ScreenExtract' component={ScreenExtract} options={{ headerShown: false }}/>
      <stack.Screen name='ScreenBox' component={ScreenBox} options={{ headerShown: false }}/>
      <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <stack.Screen name='ScreenRecharge' component={ScreenRecharge} options={{ headerShown: false }} />
      <stack.Screen name='ScreenPix' component={ScreenPix} options={{ headerShown: false }} />
      <stack.Screen name='Login_User' component={LoginUser} options={{ headerShown: false }}/> 
      <stack.Screen name='ScreenApproved' component={ScreenApproved} options={{ headerShown: false }}/> 
      
      </stack.Navigator>

    </NavigationContainer>
  );
}

