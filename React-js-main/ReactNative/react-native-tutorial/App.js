// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';
// import { SafeAreaView, Image, Button, Switch, TextInput,  } from 'react-native-web';
// import myImage from './assets/icon.png'
// import { useState } from 'react';

// export default function App() {

//   const [active,setActive] = useState(false)
//   console.log(active)

//   // const showToast = () =>{
//   //   ToastAndroid.show("Plz subscribe my channel",ToastAndroid.SHORT())
//   // }

//   return (
//     // View tag is like div tag and Text tag is like our p tag
//     // and StatusBar tag is our mobile top border frame where our time, battery and other notication area is present
//     <View style={styles.container}> 
    
//       <Text style={styles.txt}>Programmingwithht1</Text>
//       <Text>Programmingwithht1</Text>
//       <StatusBar backgroundColor='red' style="auto" /> 


//       {/* SafeAreaView tag help us to show our tag below the StatusBar it's work on IOS app */}
//       <SafeAreaView> 
//         <ScrollView>
//         <Image 
//           // used when import through external online link
//           source={{uri: 'https://avatars.githubusercontent.com/u/86909314?s=400&u=34d82ee10b99cecdcc84d784c943568d59ffd03d&v=4'}}
//           style={{width:200,height:200}}
//         />

//         {/* <Image 
//           source={myImage} //used when used import 
//           style={{width:200,height:200}}
//         /> */}

//         {/* <Image  
//           source={require("./assets/icon.png")} //used when don't used import 
//           style={{width:200,height:200}}
//         /> */}

//         <TextInput 
//           style={{backgroundColor:'red',padding:20,color:'white'}}
//         />

//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='pink'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='brown'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='darkblue'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='skyblue'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='orange'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='black'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='green'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='blue'/>
//         <Button title="Click Me" onPress={()=> "Subscribe MY ChanNel"} color='red'/>

//         <Switch value={active} onClick={()=> setActive(prev => !prev)} />

//         </ScrollView>
//       </SafeAreaView>

//     </View>
//   );
// }





import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Screen1 from './screens/Screen1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from './screens/Register';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View>
    //   <Home />
    //   <Screen1/>
    // </View>

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='Home' component={Home} 
          // options={{headerStyle: {backgroundColor: 'pink'}}}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Register' 
          component={Register} 
          options={{headerShown:false}}

        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}
