
import React, {Component} from 'react';
import {

    Button,
    Text,
    TextInput,
    View
} from 'react-native';
// Platform,
//     StyleSheet,

import { StackNavigator } from 'react-navigation';

export default class SplashTest extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };


    constructor(props){
        super(props);
        this.state={text:''}
    }
    render() {

        const { navigate } = this.props.navigation;

        let userData={user:'lucy',age:13}


        return (
            // onPress={()=>navigator('page1',userData)}

            // 尝试把`flexDirection`改为`column`看看
            /*
            <View style={{flex: 1, flexDirection: 'row'}}>
                */

            <View style={{padding:10,backgroundColor: 'red'}}>
                <Text>Hello React</Text>
                <Button

                    onPress={()=>  navigate('page1', { name: 'Jane' })}
                    // onPress={()=>navigation.navigator('page1',userData)}
                    title='open textViewtest'> </Button>
                <Button  style={{marginTop:20}} onPress={()=>navigate('page2',{user:'lucy',name:121})} title={"open flat page"}> </Button>
                <Button  style={{marginTop:20}} onPress={()=>navigate('LoginTest',{user:'lucy',name:121})} title={"login"}> </Button>
                <Button style={{padding:20}} onPress={()=>navigate('ComponentProps')} title={"ComponentProps"}> </Button>
                <Button style={{padding:20}} onPress={()=>navigate('TestState')} title={"TestState"}> </Button>
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