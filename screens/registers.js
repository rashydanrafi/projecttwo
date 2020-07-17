import React from 'react';
import {StyleSheet, View, Text, Button, TextInput} from 'react-native';


export default function Register({navigation}){
  

    const buttonRegister= () => {
      alert("YOU HAVE REGISTERED");
        navigation.navigate('Login');
    }


    return (
    <View style ={styles.container}>

        <View style={styles.header}>
            <Text style={{textAlign: "center", marginTop: 50,}}>Please fill in the form to sign up</Text>
        </View>

        <TextInput 
          style={styles.username} 
          placeholder='username (eg.Jwe23)'
        />

        <TextInput
           style={styles.email}
           placeholder='e-mail (eg.Jwe@gmail.com)'
        />

        <TextInput 
          style={styles.password} 
          placeholder='password (eg.123456)'
        />


        <View style={styles.registerbutton}>
          <Button title='Register' onPress={buttonRegister} />
        </View>


    </View> 
    );
} 

const styles=StyleSheet.create({

    container:{

        flex:1,
        backgroundColor: '#fff',
    
    },

     header:{

     },

     username: {
        borderWidth: 2,
        padding: 8,
        borderColor: 'darkgrey',
        width: 200,
        marginTop:50,
        marginHorizontal: 80,
        backgroundColor: 'lightgrey',
      },

      email: {
        borderWidth: 2,
        padding: 8,
        borderColor: 'darkgrey',
        width: 200,
        marginTop:10,
        marginHorizontal: 80,
        backgroundColor: 'lightgrey',
      },

      password: {
        borderWidth: 2,
        padding: 8,
        borderColor: 'darkgrey',
        width: 200,
        marginTop:10,
        marginHorizontal: 80,
        backgroundColor: 'lightgrey',
      },

      registerbutton:{
        marginTop: 10,
        marginHorizontal:150,
        backgroundColor: 'aqua',
        width: 85,
        height: 45,
      },

});