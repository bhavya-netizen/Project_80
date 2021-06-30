import React, {Component} from 'react';
import { Text, View, TextInput, StyleSheet, Platform, StatusBar, SafeAreaView } from 'react-native';
import {WebView} from 'react-native-webview';

export default class StarMapScreen extends Component {
    constructor(){
        super()
        this.state = {
            longitude: '',
            latitude: ''
        }
    }
    render(){
        const {longitude, latitude} = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=${longitude}&latitude=${latitude}&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true&projection=stereo&showdate=false&showposition=false'
        return(
            <View style = {{flex: 1, backgroundColor: '#1F0024'}}>
                <SafeAreaView style = {styles.droidSafeArea} />
                <View style = {{flex: 0.5, marginTop: 20, alignItems: 'center'}}>
                    <Text style = {styles.titleText}>Star Map</Text>
                    <TextInput
                        style = {styles.inputStyle}
                        placeholder = "Enter your longitude"
                        placeholderTextColor = "white"
                        onChangeText = {(text) => {
                            this.setState({
                                longitude: text
                            })
                        }}
                    />  
                     <TextInput
                        style = {styles.inputStyle}
                        placeholder = "Enter your latitude"
                        placeholderTextColor = "white"
                        onChangeText = {(text) => {
                            this.setState({
                                latitude: text
                            })
                        }}
                    />    
                </View>
                <WebView
                    scalesPageToFit = {true}
                    source = {{uri: path}}
                    style = {{marginTop: 20, marginBottom: 20}}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputStyle: {
        height: 40,
        width: 200,
        color: 'white', 
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
})
    