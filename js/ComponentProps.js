import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class ComponentProps extends Component {


    render() {
        return (

            <View>
                <GoodMorning></GoodMorning>
                <GoodMorning name={"marry"}></GoodMorning>
                <GoodEvening name={"bob"}></GoodEvening>
                {
                    names.map(name => <GoodAfternoon name={name}/>)
                }
            </View>
        );
    }
}

// http://www.css88.com/react/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types'


//全局变量使用
global.c = 11
const b = [1, 2, 3]

const names = ['tom', 'jerry', 'nick'];

class GoodMorning extends Component {

    tempString = "cc";

    constructor(props) {
        super(props);
        this.tempIndex = 1;
        //两个一致
    }

    //默认值
    static defaultProps = {
        name: 'green'
    }

    //约定类型
    static propTypes = {
        name: PropTypes.string
    }

    render() {
        return (
            <Text>Good Morning,{this.props.name}+{global.c}</Text>
        )
    }
}

class GoodAfternoon extends Component {
    render() {
        return <View>
            <Text>GoodAfternoon,{this.props.name}</Text>
        </View>
    }
}

const GoodEvening = (props) => {
    return <Text>Good Evening,{props.name}</Text>
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

// AppRegistry.registerComponent('ComponentProps', () => ComponentProps);