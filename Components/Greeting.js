import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Greeting extends Component {
  render() {
    return <Text style={styles.bigGold}>Welcome, {this.props.name}!</Text>;
  }
}

const styles = StyleSheet.create({
  bigGold: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 24,
  }
});
