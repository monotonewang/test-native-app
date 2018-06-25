import React, {Component} from 'react';
import {
    Image,
    StyleSheet,
    Text, ToastAndroid, TouchableOpacity,
    View
} from 'react-native';

const imagePathFirst = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1526974358&di=ef5cba947fa8f60ea0e9da8a0f49a719&imgtype=jpg&er=1&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F4a36acaf2edda3cc8b97fb1d0ae93901213f9298.jpg";

export default class TestState extends Component {
    constructor(props) {
        super(props)
        this.state = {like: 0, unlike: 1}
        setInterval(() => {
            this.setState(previousState => {
                return {unlike: this.state.unlike + 1};
            });
        }, 1000);
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    onPressButton = () => {

        this.setState(previousState => {
            return {like: this.state.like + 1}
        })

        //setState是异步操作
        ToastAndroid.show('This is a toast with short duration loginAction' + this.state.like, ToastAndroid.SHORT)

    };

    /*<Text>t</Text>*/

    render() {
        return (

            <View>

                {/*<Image style={styles.image} source={{uri: imagePathFirst}}/>*/}
                <TouchableOpacity onPress={this.onPressButton}>
                    <Image style={styles.image} source={{uri: imagePathFirst}}/>
                </TouchableOpacity>
                <Text>{this.state.like}</Text>

                {this.renderUnlike()}
                {/*<Text>unlike+{this.state.unlike}</Text>*/}


            </View>
        );
    }

    renderUnlike() {

        if (this.state.unlike >= 20) {
            return <Text>unlike full</Text>
        } else {
            return <Text>unlike+{this.state.unlike}</Text>
        }
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
    image: {
        padding: 10,
        height: 300,
        width: 300,
    },
});

// AppRegistry.registerComponent('LotsOfStyles', () => LotsOfStyles);