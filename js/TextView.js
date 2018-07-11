import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class TextView extends Component {
    render() {
        return (
            
            <View>
                <Text style={styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
                <View style={{width: 150, height: 150, backgroundColor: 'red'}}/>
                <View style={styles.root}/>
            </View>
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
    root:{
        marginTop:20,
        width:150,
        height:150,
        borderColor:'black',
        backgroundColor:'red',
        borderWidth:2,
    }
});

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);