import { View, Platform,StatusBar,SafeAreaView } from 'react-native'
import React from 'react'

const SafeAreaViewAndroid = ({Component,...rest}) => {
  return (

    // SafeAreaView tag work in IOS and in android we manual write like Platform.OS === 'android
    <View style={{paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,backgroundColor:'white',flex:1}}>
      <SafeAreaView>
        <Component {...rest} />
      </SafeAreaView>
    </View>
  )
}

export default SafeAreaViewAndroid