import React from 'react'
import { View ,Text, TouchableOpacity} from 'react-native'
import {Button,Appbar, Avatar} from "react-native-paper"
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'

const Main = ({navigation}) => {
  return (
    <View>
    {/* <Text>Home Page1</Text> */}
    <Appbar>
      <Appbar.Action icon='heart' onPress={()=>console.log('heart')} />
      <Appbar.Content title='wow' />
      <Appbar.Action
        icon='account-circle-outline'
        onPress={()=>console.log('account circle')}

      />
      <Appbar.Action icon='camera' onPress={()=>console.log('camera')} />
    </Appbar>



    <Avatar.Image 
      source={{uri:'https://avatars.githubusercontent.com/u/86909314?s=400&u=34d82ee10b99cecdcc84d784c943568d59ffd03d&v=4'}} 
      size={160}
      style={{alignSelf:'center',margin:40}}
      />


    <Button 
        color='white'
        style={{backgroundColor:"blue",marginHorizontal:40,borderRadius:30}}
        onPress={()=> navigation.navigate('Register')}
        // onLongPress={()=> console.log('longpress')}
    >
        Screen 1
    </Button>
    </View>
  )
}

const Home = ({navigation}) =>{
  return <SafeAreaViewAndroid Component={Main} navigation={navigation} />
}


export default Home
