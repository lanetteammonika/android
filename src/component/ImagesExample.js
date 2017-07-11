import React, { Component } from 'react'
import { View,Image,StyleSheet,Dimensions } from 'react-native'
const win = Dimensions.get('window');
class ImagesExample extends Component {
    render() {
        return (
    <View style={{flex:1}}>
        <View style={styles.bgImageWrapper1}>
            <Image style={[styles.bgImage1]} source={require('./img/images.jpg')}  />
        </View>
    </View>
        )
        }
        }

export default ImagesExample
const styles = StyleSheet.create({
    bgImageWrapper1: {
        top: 0, bottom: 0, left: 0, right: 0,
        backgroundColor:"#000"
    },
    bgImage1: {
        width: win.width,
        height: win.height,
        position: 'absolute',
        resizeMode: 'cover'
    }
})