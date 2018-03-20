import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry, Image } from 'react-native';
import Greeting from './Components/Greeting'
import bitcoinLogo from './Images/bitcoinLogo.png';
import PriceList from './Components/PriceList';

export default class App extends Component {
  render() {
    let pic = {
      uri: 'https://bitcoinsymbol.org/bitcoinsymbol-pack/2D/favicon-1024.png'
    };
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={bitcoinLogo} style={styles.logo}/>
          <Greeting name='Jay' />       
        </View>
        <View style={styles.body}>
          <PriceList/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    marginTop: '8%',
    width: '100%',
  },

  logo: {
    backgroundColor: 'black',
    width: 100,
    height: 100,
  },

  body: {
    flex: 3,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },

  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
