import { View, Text,StyleSheet } from 'react-native'
import { TextInput, Button, Checkbox, Headline } from 'react-native-paper'
import React, { useState } from 'react'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'

const Main = ({ navigation }) => {
    const [checked, setChecked] = useState(false)
    return (
        <View>
            <Headline style={styles.heading}>Register</Headline>
            <TextInput
                placeholder='Full Name'
                style={
                    styles.inputs
                }

            />
            <TextInput placeholder='Email' style={styles.inputs} />
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputs} />
            <View style={{alignSelf: 'center',flexDirection:'row'}}>
                <Checkbox 
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(prev => !prev)}
                    color='rgba(108,21,222,1)'
                />
                <Text>Accept privacy policy and terms</Text>
            </View>
            <Button color='white' style={styles.btn}
                onPress={() => console.log('registed')}
                disabled={checked ? false : true}
            >Register</Button>
        </View>
    )
}

const Register = ({navigation}) => {
    return <SafeAreaViewAndroid Component={Main} navigation={navigation} />
}


const styles = StyleSheet.create({
    inputs: {
        backgroundColor: 'white',
        marginHorizontal: 60,
        marginVertical: 30,
    },
    heading: {
        textAlign: 'center',
        marginVertical: 20,
        color: 'rgba(108,21,222,1)',
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: 'tomato',
        borderRadius: 5,
        paddingVertical: 4,
        width: '60%',
        alignSelf: 'center',
        // marginVertical:50
    }
})


export default Register