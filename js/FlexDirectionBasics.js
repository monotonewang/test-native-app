import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (

            // 尝试把`flexDirection`改为`column`看看
            /*
            <View style={{flex: 1, flexDirection: 'row'}}>
                */

            <View style={{flex: 1, flexDirection: 'column',justifyContent:'space-between'
            ,alignItems: 'stretch',
            }}>
                <View style={{height: 50, backgroundColor: 'powderblue'}} />
                <View style={{ height: 50, backgroundColor: 'skyblue'}} />
                <View style={{ height: 50, backgroundColor: 'steelblue'}} />
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
});

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);