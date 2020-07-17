import React from 'react';
import { View,Text, StyleSheet, Image, Button } from 'react-native';

export default function qrpages({navigation}) {

  const buttonscanqr= () => {
      navigation.navigate('Login');
  } 

  const clickHandler=() => {
    navigation.action.setParams({CB:10})
    // reloadValue += 10;
    // console.log("a", console.log(reloadValue))
  }
  // console.log();
  const reloadValue = navigation.state.params.CB;  
  console.log("a" , reloadValue)

    return (
      <View style={styles.container}>

        <View style={styles.instruction}>
          <Text>Current Balance : Rm {JSON.stringify(navigation.getParam('CB'))}</Text>
          <Text>TOTAL PRICE : Rm {JSON.stringify(navigation.getParam('TP'))}</Text>
        </View>
        <Button title='RM 10' onPress={clickHandler} /> 
        <Button title='RM 20' onPress={clickHandler} />
        <Button title='RM 50' onPress={clickHandler} />
        <Button title='RM 100' onPress={clickHandler} />
    {/* <Text>New Balance is RM: {setCurrentbalance}</Text>*/}
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
  },

  images:{
    width:220,
    height:220,
    marginTop: 90,
    marginHorizontal: 85,
  },

  scanqr:{
    marginTop: 50,
    marginHorizontal:120,
    backgroundColor: 'lightgrey',
    borderWidth:1,
    width: 150,
    height: 45,
  },

  instruction:{
    width: 200,
    height:45,
    marginTop: 20,
    marginHorizontal:100,
  }

});
