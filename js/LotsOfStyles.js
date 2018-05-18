import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class LotsOfStyles extends Component {
    render() {
        return (

            <View style={{height:300}}>
                <View style={{flex:1,backgroundColor:'green'}}/>
                <View style={{flex:2,backgroundColor:'red'}}/>
                <View style={{flex:3,backgroundColor:'blue'}}/>
            </View>
        /*    <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <View style={{width:150,height:150,backgroundColor:'red'}}/>
            </View>*/
    );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);