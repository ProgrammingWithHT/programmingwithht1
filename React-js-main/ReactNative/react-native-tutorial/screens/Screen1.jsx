import React from 'react'
import { View,Text } from 'react-native'
import {Button} from "react-native-paper"

const Screen1 = ({navigation}) => {
  return (
    <View style={{marginTop: 50,backgroundColor: 'pink'}}>
        <Text>Screen Page</Text>
        <Button 
            color='white'
            style={{backgroundColor:"blue",margin:30,borderRadius:30}}
            onPress={()=>navigation.navigate('Home')}
            onLongPress={()=> console.log('longpress')}
        >
            Click Me
        </Button>
    </View>
  )
}

export default Screen1
