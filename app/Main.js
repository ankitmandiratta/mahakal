import { Text, View,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'

const Main = () => {
    const [isUserSignedIn,setIsUSerSignedIn] = useState(false)

    return (
<SafeAreaView>
{   isUserSignedIn?<Text>B</Text>:<Text>A</Text> }
 {/* {   isUserSignedIn?<HomeNavigation />:<SignInNavigation /> } */}
</SafeAreaView>
  )
}

export default Main

