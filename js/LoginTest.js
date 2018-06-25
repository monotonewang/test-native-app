import React, {Component} from 'react';

import axios from 'axios'

import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    ToastAndroid,
    Button,
} from 'react-native';

export default class LoginTest extends Component {
    constructor(props) {
        super(props);
        this.state = {telephone: '', password: ''}
    }

    render() {

        function getUser() {
            axios.post('http://118.178.224.151:9093/user/anno/loginBasic', {
                telephone: '13634133426',
                password: '21212121221',
                deviceToken: '21212121221',

            }).then(function (response) {


                var responseData = response.data;

                var x = JSON.parse(responseData);


                console.warn(response.data.code);

                ToastAndroid.show('This is a toast with short duration loginAction' + response.data, ToastAndroid.SHORT)

            }).catch(function (error) {
                console.log(error);

                ToastAndroid.show('This is a toast with short duration error' + response.data, ToastAndroid.SHORT)
            });

        }


        function loginAction() {
            ToastAndroid.show('This is a toast with short duration loginAction', ToastAndroid.SHORT)

            return fetch('http://118.178.224.151:9093/user/anno/loginBasic', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstParam: 'yourValue',
                    secondParam: 'yourOtherValue',
                }),
            }).then((reponse) => {
                reponse.json()
                console.log(reponse.json())
                // ToastAndroid.show(reponse.json(), ToastAndroid.SHORT)
            });
        }

        return (

            // 尝试把`flexDirection`改为`column`看看
            /*
            <View style={{flex: 1, flexDirection: 'row'}}>
                */

            <View style={{
                flexDirection: 'column', justifyContent: 'space-between'
                , alignItems: 'stretch',
            }}>
                <TextInput
                    style={{height: 40}}
                    placeholder="请输入手机号码"
                    onChangeText={(telephone => this.setState({telephone}))}
                >

                </TextInput>
                <TextInput
                    style={{height: 40}}
                    placeholder="请输入密码"
                    onChangeText={(password => this.setState({password}))}
                >

                </TextInput>
                <Button onPress={() => getUser()} title={"登录系统"}></Button>
                <View style={{height: 50, backgroundColor: 'powderblue'}}/>
                <View style={{height: 50, backgroundColor: 'skyblue'}}/>
                <View style={{height: 50, backgroundColor: 'steelblue'}}/>
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