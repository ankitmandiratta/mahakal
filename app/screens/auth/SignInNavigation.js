import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {SignIn,SignUp,GetOtp} from './';
import Main from '../../Main';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const SignInNavigation = () => {
  return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName='SignIn'>

      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
        <Stack.Screen name="Get OTP" component={GetOtp}  options={{headerShown:false}} />
        <Stack.Screen name="Main" component={Main}  options={{headerShown:false}} />
        
      </Stack.Navigator>


      </NavigationContainer>

  )
}

export default SignInNavigation