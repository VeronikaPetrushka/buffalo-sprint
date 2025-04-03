import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Dimensions, ImageBackground, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get('window');

const Nav = () => {
    const nav = useNavigation();
    const [active, setActive] = useState('TimerScreen');

    const handleNavigate = (screen) => {
        setActive(screen);
        nav.navigate(screen)
    };    

    useEffect(() => {
        const unsubscribe = nav.addListener('focus', () => {
            const currentRoute = nav.getState().routes[nav.getState().index].name;
            setActive(currentRoute);
        });

        return unsubscribe;
    }, [nav]);

    return (
        <ImageBackground source={require('../asst/backgrounds/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <Image source={require('../asst/decor/buffalo.png')} style={styles.buffalo} />

                <TouchableOpacity 
                    style={[styles.button, {marginTop: -3}]} 
                    onPress={() => handleNavigate('TimerScreen')}>
                        <Text style={styles.buttonText}>Timer</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => handleNavigate('KnowledgeScreen')}>
                    <Text style={styles.buttonText}>Knowledge Zone</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => handleNavigate('ColorsScreen')}>
                    <Text style={styles.buttonText}>Game</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.button} 
                    onPress={() => handleNavigate('SetScreen')}>
                    <Text style={styles.buttonText}>Settings</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 24,
        paddingTop: height * 0.1
    },

    buffalo: {
        width: 280,
        height: 310,
        resizeMode: 'contain',
    },
    
    button: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#fdfeba',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 24,
        backgroundColor: 'rgba(160, 8, 171, 0.5)'
    },

    buttonText: {
        fontSize: 28,
        fontWeight: '900',
        color: '#fdfeba',
        lineHeight: '120%'
    }

});

export default Nav;
