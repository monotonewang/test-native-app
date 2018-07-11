import React, {Component} from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    View,
    Image, ToastAndroid
} from 'react-native';


export default class FlatListTest extends Component {

    // componentDidMount(){
    //     fetch('https://api.douban.com/v2/movie/in_thraters', {
    //         // method: 'POST',
    //         headers: {
    //             // Accept: 'application/json',
    //             // 'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             // telephone: '13634133426',
    //             // password: '12345678',
    //             // deviceToken: '21212121221',
    //         }),
    //     }).then((reponse) => {
    //         reponse.json()
    //         console.log(reponse.json())
    //
    //         reponse.toString();
    //
    //         reponse.
    //
    //         ToastAndroid.show('This is a toast with short duration loginAction' + reponse.toString(), ToastAndroid.SHORT)
    //         // ToastAndroid.show(reponse.json(), ToastAndroid.SHORT)
    //     }).catch((error)=>{
    //         ToastAndroid.show('This is a toast with short duration error' + error.response, ToastAndroid.SHORT)
    //     });
    // }

    static navigationOptions = {
        title: 'ChatScreen',
    };


    onPressButton() {

        // navigate('Chat')
        console.log("xxxxxxxxxxxxxxxxxxxx")
    }


    render() {
        const imagePathFirst = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526974358&di=ef5cba947fa8f60ea0e9da8a0f49a719&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3cc8b97fb1d0ae93901213f9298.jpg";
        const imagePathSecond = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526974445&di=b358c56c11efc383aa314b89aaac8e55&imgtype=jpg&er=1&src=http%3A%2F%2F7vzsvp.com2.z0.glb.qiniucdn.com%2Fimages%2Factivity%2Fphoto%2FphotoHiRes%2F10015%2F1815.jpg";
        return (

            <View style={styles.container}>

                {/*<Image source={{uri:imagePathFirst}}  style={{width: 38, height: 38}} />*/}

                {/*<Image source={{uri:imagePathFirst}} style={styles.image} />*/}
                <Text onPress={this.onPressButton}>测试点击</Text>
                <FlatList
                    numColumns={3}
                    style={styles.row}
                    data={[
                        {key: imagePathFirst},
                        {key: imagePathSecond},
                        {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond}, {key: imagePathFirst},
                        {key: imagePathSecond},
                    ]}
                    renderItem={({item}) => <Image style={styles.image} source={{uri: item.key}}/>}
                />
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        justifyContent:'space-between',
        paddingHorizontal:7,
        backgroundColor: 'red',
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
    },
    image: {
        padding: 10,
        width:300/3,
        height:300/3*1.2,
    },
    row: {paddingHorizontal: 15}
})

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);