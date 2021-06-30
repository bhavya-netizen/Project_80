import React, {Component} from 'react';
import { Text, View, Image, ImageBackground, StyleSheet, TouchableOpacity, Alert, Platform, StatusBar, SafeAreaView, Linking } from 'react-native';
import axios from 'axios';

export default class DailyPicScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            apod: [],
        }
    }

    componentDidMount(){
        this.getAPOD();
    }

    getAPOD = () => {
        axios   
            .get("https://api.nasa.gov/planetary/apod?api_key=YUY6VW7ppBeW1T7KbkQ3E53PgxVZtv9TyHeC2dov")
            .then(response => {
                this.setState({apod: response.data})
            })
            .catch(error => {
                Alert.alert(error.message)
            })
    }

    render(){
        const url = this.state.apod.url
        if(Object.keys(this.state.apod).length === 0){
            return(
                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Text>Loading</Text>
                </View>
            );
        }
        else {
            return(
                <View style = {styles.container}>
                    <SafeAreaView style = {styles.droidSafeArea} />
                    <ImageBackground
                        source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
                        <Text style = {styles.routeText}>Astronomy picture of the day</Text>
                        <Text style = {styles.titleText}>{this.state.apod.title}</Text>
                        <TouchableOpacity style = {styles.listContainer}
                            onPress = {() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                        >
                            <View style = {styles.iconContainer}>
                                <Image source = {require('../assets/play-video.png')} style = {{width: 50, height: 50}}></Image>
                            </View>
                        </TouchableOpacity>

                            <Text style = {styles.explanationText}>{this.state.apod.explanation}</Text>
                            
                        </ImageBackground>
                </View>
            );
        }        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#F501F7',
    },
    listContainer: {
        backgroundColor :'rgba(50, 50, 50, 0.5)',
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
        borderRadius: 10,
        flex: 0.8,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    explanationText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },
})