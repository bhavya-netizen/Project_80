import React, {Component} from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <SafeAreaView style = {styles.droidSafeArea} />
                <ImageBackground source = {require('../assets/stars.gif')} style = {styles.backgroundImage}>
                    <View style = {styles.titleBar}>
                        <Image source = {require('../assets/main-icon.png')} style = {{height: 170, width: 170}}></Image>
                        <Text style= {styles.titleText}>Stellar App</Text>
                    </View>

                    <TouchableOpacity style = {styles.routeCard} onPress = {() => 
                        this.props.navigation.navigate("SpaceCrafts")
                    }>
                        <Text style = {styles.routeText}>Space Crafts</Text>
                        <Image source = {require('../assets/space_crafts.png')} style = {styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.routeCard} onPress = {() =>
                        this.props.navigation.navigate("StarMap")
                    }>                        
                        <Text style = {styles.routeText}>Star Map</Text>
                        <Image source = {require('../assets/star_map.png')} style = {styles.iconImage}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.routeCard} onPress = {() =>
                        this.props.navigation.navigate("DailyPic")
                    }>                        
                        <Text style = {styles.routeText}>Daily Pictures</Text>
                        <Image source = {require('../assets/daily_pictures.png')} style = {styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    routeCard: {
        flex: 0.13,
        margin: 10,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    routeText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3E0079',
        justifyContent :'center',
        alignItems: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    iconImage: {
        position: 'absolute',
        height: 80,
        width: 80,
        resizeMode: 'contain',
        right: -15,
        top: -15,
    },
});