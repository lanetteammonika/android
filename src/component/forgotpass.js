import React, { Component } from 'react'
import {View, Image,Text, TouchableOpacity, TextInput, Dimensions,StyleSheet} from 'react-native'


const win = Dimensions.get('window')
class ForgotPass extends Component {
    render() {
        return (
            <View>
                <View style={styles.bgwrapper}>
                    <Image style={[styles.background1]} source={require('./img/images.jpg')} />
                </View>
                <View style={styles.container1}/>

                <View style={styles.wrapper}>
                    <Text style={styles.textinput}> Forgot Password</Text>
                    <View style={styles.far}/>

                    <View style={styles.far2}/>
                    <View style={styles.inputwrap}>
                        <View style={styles.iconwrap1}>
                            <Image
                                style={styles.icon2}
                                source={require('./img/email-icon.png')}
                                resizeMode='contain'
                            />
                        </View>
                        <TextInput
                            placeholder="Email"
                            style={styles.inpu}
                            underlineColorAndroid="transparent"
                        />
                    </View>

                    <View style={styles.far1}/>
                    <TouchableOpacity style={styles.buttoncenter} activeOpacity={.5} onPress={() => this.props.navigation.navigate("Changepass")}>
                        <View style={styles.button1}>
                            <Text style={styles.buttontext}>Send</Text>
                        </View>

                    </TouchableOpacity>


                </View>
                <View style={styles.container1}/>

            </View>
        )
    }
}
export default ForgotPass
const styles = StyleSheet.create({
    far:{
        marginBottom:50
    },
    far1:{
        marginTop:50
    },
    far2:{
        marginTop:5
    },
    background1:{
        width: win.width,
        height: win.height
    },
    bgwrapper:{
        flex:1,
    },
    container1:{
        marginTop:win.height-550
    },
    textinput:{
        fontSize:30,
        color:"#ffffff",
        textAlign:'center',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    buttoncenter:{
        alignItems:'center',
        justifyContent:'center'
    },
    inputwrap:{
        flexDirection:"row",
        marginVertical:10,
        height:40,
        backgroundColor:"transparent",
        borderRadius: 10
    },
    inpu:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:"#FFF",
        fontSize:20
    },
    wrapper:{
        paddingHorizontal:15
    },
    button1:{
        width:win.width-80,
        backgroundColor:"#d73352",
        paddingVertical:5,
        marginVertical:15,
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 50
    },
    buttontext:{
        color:"#ffffff",
        fontSize:30
    },
    iconwrap:{
        paddingHorizontal:7,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#d73352"
    },
    iconwrap1:{

        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#d73352"
    },
    icon1:{
        height:20,
        width:20
    },
    icon2:{
        height:35,
        width:35
    },
    forgottext:{
        color:"#ffffff",
        backgroundColor:"transparent",
        textDecorationLine: "underline",
        textAlign:'center',
        fontSize:20,
        marginTop:10
    },
    createtext:{
        color:"#ffffff",
        backgroundColor:"transparent",
        textDecorationLine: "underline",
        textAlign:'center',
        fontSize:25,
        marginTop:20
    }


})
