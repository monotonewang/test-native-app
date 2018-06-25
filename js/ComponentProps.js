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
            </View>
        );
    }
}

// http://www.css88.com/react/docs/typechecking-with-proptypes.html
import PropTypes from 'prop-types'

class GoodMorning extends Component {

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
            <Text>Good Morning,{this.props.name}</Text>
        )
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