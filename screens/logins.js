import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App({navigation}) {

    //prop.navigation //using props. {props}
    //const [name, setName] = useState('Rashydan');
    //const [usernames, setUsernames] = useState('What is your name?');
    //const [age, setAge] = useState('23');
    //const [passs, setPasss] =useState('What is your age?');
    //const [arr, setArr ] = useState([1, 2, 3]);

    // useEffect(() => {
    //   fetchData();
    // }, [arr]);

    // const fetchData = async () => {
    //   const data = await fetch('https://randomuser.me/api');
    //   const newData = await data.json;
    //   console.log(newData);
    //   setArr(newData);
    // }


    // const changeArr = (value) => {
    //   const newArr = [...arr, value];
    //   setArr(newArr);
    // }

    const buttonLogin = () => {

      navigation.navigate('Homepage');
    }

    const buttonRegister =() => {

        navigation.push('Register');
    }

  return (

    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.boldText}> Welcome to Automated Payment System (A.P.S)</Text>
      </View>

      <View style={styles.subheader}> 
        <Text style={styles.italicText}>
          An Innovative Shopping Experience
        </Text>
      </View>

      <TextInput 
      style={styles.username} 
      placeholder='username (eg.Jwe23)'
      />

      <TextInput 
      style={styles.password} 
      secureTextEntry
      placeholder='password (eg.123456)'
      />


        <View style={styles.loginButton} >
          <Button title='Login' onPress={buttonLogin} />
        </View>

        <View style={styles.signups}>
          <Text style={{textAlignVertical: "center",textAlign: "center",}}>
            Dont't have an account? 
          </Text>
          <Button 
          title="Sign Up"
          type="clear"
          onPress={buttonRegister}
          />

        </View>


      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    backgroundColor: 'steelblue',
    width: 412,
    height: 150,
    alignItems: 'center',
    justifyContent: "center",
  },

  boldText: {
    justifyContent: 'center',
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 15,

  },

  italicText: {
    fontStyle: 'italic',
    textAlign:'center',
  },

  //names: {
    //marginTop: 100,

  //},

  //ages: {
    //marginTop: 10,

  //},

  loginButton:{
    marginTop: 10,
    marginHorizontal:170,
    backgroundColor: 'aqua',
    width: 70,
    height: 45,
  },

  username: {
    borderWidth: 2,
    padding: 8,
    borderColor: 'black',
    width: 200,
    marginTop:100,
    marginHorizontal: 100,
    backgroundColor: '#fff',
  },

  password: {
    borderWidth: 2,
    padding: 8,
    borderColor: 'black',
    width: 200,
    marginTop:10,
    marginHorizontal: 100,
    backgroundColor: '#fff',
  },

  signups: {
    marginTop: 50,
  },


  
});
