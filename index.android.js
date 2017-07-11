/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Routes from './src/component/Routes/routes.js'
//
//
// export default class reactDemo extends Component {
//   render() {
//     return (
//         <View>
//           <Routes />
//         </View>
//     );
//   }
// }
// import React, { Component } from 'react';
// import { AppRegistry,TouchableOpacity } from 'react-native';
// import { StackNavigator} from 'react-navigation'
// //import IOSIcon from "react-native-vector-icons/Ionicons";
// import Createacc from './src/component/createacc.js';
// import ForgotPass from './src/component/forgotpass.js';
// import ChangePass from './src/component/changepass.js';
// import SignUp from './src/component/SignUp.js'
// const stackNav = StackNavigator({
//     SignIn: {
//         screen: SignUp,
//         navigationOptions: {
//             header: null
//         },
//         },
//     Create: {
//         screen: Createacc,
//         // navigationOptions: {
//         //     title: () => "Create",
//         // }
//         navigationOptions: {
//             header: null
//         },
//     },
//     Forgotpass: {
//         screen: ForgotPass,
//         // navigationOptions: {
//         //     title: () => "Create",
//         // }
//         navigationOptions: {
//             header: null
//         },
//     },
//     Changepass: {
//         screen: ChangePass,
//         // navigationOptions: {
//         //     title: () => "Create",
//         // }
//         navigationOptions: {
//             header: null
//         },
//     }
// })
//
//
//
// // //AppRegistry.registerComponent('reactTutorialApp', () => stackNav);
//
import React, { Component } from 'react';
import { Modal,AppRegistry, Text, TouchableHighlight, View } from 'react-native';

class ModalExample extends Component {

    state = {
        modalVisible: false,
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight onPress={() => {
                                this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight onPress={() => {
                    this.setModalVisible(true)
                }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
AppRegistry.registerComponent('reactDemo', () => ModalExample);
