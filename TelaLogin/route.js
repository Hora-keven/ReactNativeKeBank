import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';


import pix from './assets/pixBLACK.png'
import phone from './assets/phoneWHITE.png'
import extrato from './assets/extratoWhite.png'
import locke from './assets/lockeBlack.png'
import card from './assets/CARDBLACK.png'
import emprestimo from './assets/emprestimoBLACK.png'

import Home from './pages/Home'
import PhysicalOrJuridic from './pages/Home/phyperOrJuriPer'
import Physical from './pages/Login/Signup/Physical';
import LoginUser from './pages/Login/signin'
import Login from './pages/Login/Signup'
import FirstScreen from './pages/Screens/HomeFunc/home.js'
import ScreenPix from './pages/Screens/Pix'
import ScreenExtract from './pages/Screens/Extract'
import ScreenLoan from './pages/Screens/Loan/index'
import ScreenCards from './pages/Screens/Mycards'
import ScreenBox from './pages/Screens/Savebox'
import ScreenRecharge from './pages/Screens/Phonerecharge'
import ScreenApproved from './pages/Screens/Approved'

import ApiProvider from './pages/context/APicontext';
import Juridic from './pages/Login/Signup/Juridic';


const stack = createStackNavigator()
const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#155e85',
          paddingBottom: 1,
          paddingTop: 1,
          borderTopColor: 'transparent'
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white'
      }}>

    <Tab.Screen
        name="Home"
        component={Home}

        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={22} color={color} />
          )
         }}/>

      <Tab.Screen
        name="HomeFunction"
        component={FirstScreen}

        options={{
          tabBarStyle: { display: 'none' },
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={22} color={color} />
          )
        }}/>


      <Tab.Screen
        name="ScreenPix"
        component={ScreenPix}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image source={pix}/>
            )
          }
        }}/>

      <Tab.Screen
        name="ScreenBox"
        component={ScreenBox}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image source={locke}/>
            )
          }
        }}/>

      <Tab.Screen
        name="ScreenExtract"
        component={ScreenExtract}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image source={extrato} />
            )
          }
        }}/>

      <Tab.Screen
        name="ScreenCard"
        component={ScreenCards}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image source={card}/>
            )
          }
        }}/>

      <Tab.Screen
        name="Loan"
        component={ScreenLoan}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image source={emprestimo}/>
            )
          }
        }}/>
        
      <Tab.Screen
        name="ScreenRecharge"
        component={ScreenRecharge}
        options={{

          tabBarIcon: ({ size, color }) => {
            return (
              <Image source={phone}/>
            )
          }

        }}/>

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <ApiProvider>

  
      <stack.Navigator>
        <stack.Screen name="TabScreen" component={TabScreen} options={{ headerShown: false }}/>
        <stack.Screen name='Home' component={Home} options={{ headerShown: false }}/>
        <stack.Screen name='First' component={FirstScreen} options={{ headerShown: false }} />
        <stack.Screen name='ScreenCard' component={ScreenCards} options={{ headerShown: false }} />
        <stack.Screen name='Loan' component={ScreenLoan} options={{ headerShown: false }} />
        <stack.Screen name='ScreenExtract' component={ScreenExtract} options={{ headerShown: false }} />
        <stack.Screen name='ScreenBox' component={ScreenBox} options={{ headerShown: false }} />
        <stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        <stack.Screen name='ScreenRecharge' component={ScreenRecharge} options={{ headerShown: false }} />
        <stack.Screen name='ScreenPix' component={ScreenPix} options={{ headerShown: false }} />
        <stack.Screen name='Login_User' component={LoginUser} options={{ headerShown: false }} />
        <stack.Screen name='ScreenApproved' component={ScreenApproved} options={{ headerShown: false }} />
        <stack.Screen name='PhysicalOrJuridic' component={PhysicalOrJuridic} options={{ headerShown: false }} />
        <stack.Screen name='Physical' component={Physical} options={{ headerShown: false }} />
        <stack.Screen name='Juridic' component={Juridic} options={{ headerShown: false }} />
      </stack.Navigator>
      </ApiProvider>
    </NavigationContainer>
  );
}

