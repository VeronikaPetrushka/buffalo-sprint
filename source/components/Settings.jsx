import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Switch, ImageBackground, Image, Share, Linking, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMusic } from '../constants/music.js';
import Icons from "./Icons.jsx";

const { height } = Dimensions.get('window');

const Settings = () => {
    const navigation = useNavigation();
    const { sound, toggleMusic } = useMusic();
    const [vibration, setVibration] = useState(true);
    const [notifications, setNotification] = useState(false);

    const toggleVibration = () => {
        if(vibration) {
            setVibration(false)
        } else {
            setVibration(true)
        }
    };

    const toggleNotifications = () => {
        if(notifications) {
            setNotification(false)
        } else {
            setNotification(true)
        }
    };

    const handleShare = async () => {
        try {
            const shareOptions = {
                title: "Focus Game: Buffalo's Sprint",
                message: "Hey! I found this amazing app. Download now!\nhttps://apps.apple.com/us/app/focus-game-buffalos-sprint/id6744101446",
            };
    
            const result = await Share.share(shareOptions);
    
            if (result.action === Share.sharedAction) {
                console.log(result.activityType ? `Shared via ${result.activityType}` : "App link shared successfully");
            } else if (result.action === Share.dismissedAction) {
                console.log("Share action dismissed");
            }
        } catch (error) {
            console.error("Error sharing app link:", error);
        }
    };
    

    const handleTerms = () => {
        Linking.openURL('https://www.termsfeed.com/live/a9b140aa-4230-4b63-b4d7-6328ba23063d').catch((err) =>
            Alert.alert("Error", "Unable to open Privacy Policy")
        );
    };

    return (
        <ImageBackground source={require('../assets/backgrounds/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <Image source={require('../assets/titles/settings.png')} style={{width: 140, height: 40, resizeMode: 'contain', marginBottom: 30}} />

                <ScrollView style={{width: '100%'}}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Music</Text>
                        <Switch value={sound} onValueChange={toggleMusic} thumbColor="#fff" trackColor={{ false: "#ccc", true: "#a008ab" }} />
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Vibration</Text>
                        <Switch value={vibration} onValueChange={toggleVibration} thumbColor="#fff" trackColor={{ false: "#ccc", true: "#a008ab" }} />
                    </View>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Notifications</Text>
                        <Switch value={notifications} onValueChange={toggleNotifications} thumbColor="#fff" trackColor={{ false: "#ccc", true: "#a008ab" }} />
                    </View>

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutScreen')}>
                        <Text style={styles.buttonText}>About the app</Text>
                        <View style={{width: 24, height: 24}}>
                            <Icons type={'about'} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleShare}>
                        <Text style={styles.buttonText}>Share the app</Text>
                        <View style={{width: 24, height: 24}}>
                            <Icons type={'share'} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={handleTerms}>
                        <Text style={styles.buttonText}>Terms of use</Text>
                    </TouchableOpacity>
                    <View style={{height: 100}} />
                </ScrollView>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 40,
        paddingTop: height * 0.1,
    },

    button: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderRadius: 16,
        backgroundColor: '#fdfeba',
        marginBottom: 16
    },

    buttonText: {
        fontWeight: '400',
        fontSize: 16,
        color: '#2a1d41',
    }

})

export default Settings;