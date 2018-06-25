import { AppRegistry } from 'react-native';
import App from './App';
import LotsOfStyles from './js/LotsOfStyles';
import FlexDirectionBasics from './js/FlexDirectionBasics';
import TextInputTest from './js/TextInputTest';
import FlatListTest from './js/FlatListTest';
import SplashTest from './js/SplashTest';
import LoginTest from './js/LoginTest';
import ComponentProps from './js/ComponentProps';
import { YellowBox } from 'react-native';

import  { createStackNavigator }  from 'react-navigation';

import { StackNavigator } from 'react-navigation';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

// const simpleAppNavigator= StackNavigator({
//     Home:{screen:SplashTest},
//     page1:{screen:LotsOfStyles},
//     page2:{screen:FlatListTest},
//     LoginTest:{screen:LoginTest},
// })


const simpleAppNavigator= createStackNavigator({
    Home:{screen:SplashTest},
    page1:{screen:LotsOfStyles},
    ComponentProps:{screen:ComponentProps},
    page2:{screen:FlatListTest},
    LoginTest:{screen:LoginTest},
})
// AppRegistry.registerComponent('test_native_app', () => App);
// AppRegistry.registerComponent('test_native_app', () => FlexDirectionBasics);
AppRegistry.registerComponent('test_native_app', () => simpleAppNavigator);
// AppRegistry.registerComponent('test_native_app', () => TextInputTest);
