import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Greeting from './Greeting';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        if(this.state.isShowingText) {
            return (
                <Greeting name='Jay' />
            )
        } else {
            return null;
        }
    }
}

export default class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink/>
            </View>
        );
    }
}