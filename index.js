import { AppRegistry } from 'react-native';
import App from './App';
import LotsOfStyles from './js/LotsOfStyles';
import FlexDirectionBasics from './js/FlexDirectionBasics';
import TextInputTest from './js/TextInputTest';
import FlatListTest from './js/FlatListTest';
import SplashTest from './js/SplashTest';
import LoginTest from './js/LoginTest';

import { StackNavigator } from 'react-navigation';



const simpleAppNavigator= StackNavigator({
    Home:{screen:SplashTest},
    page1:{screen:LotsOfStyles},
    page2:{screen:FlatListTest},
    LoginTest:{screen:LoginTest},
})


// AppRegistry.registerComponent('test_native_app', () => App);
// AppRegistry.registerComponent('test_native_app', () => FlexDirectionBasics);
AppRegistry.registerComponent('test_native_app', () => simpleAppNavigator);
// AppRegistry.registerComponent('test_native_app', () => TextInputTest);
