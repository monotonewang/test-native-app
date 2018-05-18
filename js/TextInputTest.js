import React, {Component} from 'react';
import {

    Text,
    TextInput,
    View
} from 'react-native';
// Platform,
//     StyleSheet,
export default class TextInputTest extends Component {
    constructor(props){
        super(props);
        this.state={text:''}
    }
    render() {
        return (

            // 尝试把`flexDirection`改为`column`看看
            /*
            <View style={{flex: 1, flexDirection: 'row'}}>
                */

            <View style={{padding:10,backgroundColor: 'red'}}>
              <TextInput style={{height:40}}
                placeholder="Type here to translate!"
                         onChangeText={(text=>this.setState({text}))}
              />
                <Text style={{padding:10,fontSize:42}}>


                    {this.state.text.split(' ').join(' ')}
                </Text>
            </View>
        );
    }
}

/*
               {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}

               */

// const styles = StyleSheet.create({
//     bigblue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//     },
//     red: {
//         color: 'red',
//     },
// });

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);