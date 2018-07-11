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

    state = {
        movies: "",
    }

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


                ToastAndroid.show('This is a toast with short duration error' + error.response, ToastAndroid.SHORT)
            });

        }


        async function getMoviesFromApi() {
            try {
                let response = await fetch(
                    'https://facebook.github.io/react-native/movies.json'
                );
                let responseJson = await response.json();

                this.setState({
                    movies: responseJson.movies,
                });

                // var string=JSON.parse(response.text());

                // ToastAndroid.show('This is a toast with short duration loginActionxx='+responseJson.movies, ToastAndroid.SHORT)
                // ToastAndroid.show('This is a toast with short duration loginActionxx='+string.toString(), ToastAndroid.SHORT)
                return responseJson.movies;
            } catch (error) {
                console.error(error);

                ToastAndroid.show('This is a toast with short duration error=', ToastAndroid.SHORT)
            }
        }


        function getUserFetch() {


            ToastAndroid.show('This is a toast with getUserFetch', ToastAndroid.SHORT)

            return fetch('http://118.178.224.151:9093/user/anno/loginBasic', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    telephone: '13634133426',
                    password: '12345678',
                    deviceToken: '21212121221',
                }),
            }).then((response) => {
                response.json()

                // var string= JSON.parse(response.text)
                console.log(response.json())

                response.toString();


                ToastAndroid.show('This is a toast with short duration loginAction' + string + "xx=" + response.json(), ToastAndroid.SHORT)
                // ToastAndroid.show(reponse.json(), ToastAndroid.SHORT)
            }).catch((error) => {
                ToastAndroid.show('This is a toast with short duration error' + error.response, ToastAndroid.SHORT)
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
                <Button onPress={() => getMoviesFromApi()} title={"登录系统"}></Button>
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