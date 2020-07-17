import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
 
const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
  }
});
 
const slides = [
  {
    key: 'scanqr',
    title: 'GET STARTED!',
    text: '1. Scan the QR Code of the store you want to shop',
    image: require('./images/1.png'),
    imageStyle: styles.image,
    backgroundColor: '#59b2ab',
  },
  {
    key: 'scanbarcode',
    text: "2. Start scanning the product's barcode to add item into your trolley",
    image: require('./images/2.png'),
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  },
  {
    key: 'trolley',
    text: '3. Keep track of the price and quantity of\nyour item inside the trolley', 
    image: require('./images/3.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
  {
    key: 'checkout',
    text: '4. When you are done, just checkout and\nmake payment in the app. No hassle, no\nmore queueing at the checkout counter',
    image: require('./images/4.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },

  {
    key: 'shopping',
    title: "You're all set!",
    text: 'You are ready to start you shopping.\nPress the button to continue..',
    image: require('./images/5.png'),
    imageStyle: styles.image,
    backgroundColor: '#22bcb5',
  },
];
 
export default class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    this.props.navigation.navigate('QRpage');
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    //this.setState({ showRealApp: true });
    this.props.navigation.navigate('QRpage');
  };
 
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 50,
          }}>
        </View>
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}