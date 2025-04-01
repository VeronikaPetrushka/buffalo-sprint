import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icons from './Icons';

const Nav = () => {
    const navigation = useNavigation();
    const [activeButton, setActiveButton] = useState('TimerScreen');

    const handleNavigate = (screen) => {
        setActiveButton(screen);
        navigation.navigate(screen)
    };    

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            const currentRoute = navigation.getState().routes[navigation.getState().index].name;
            setActiveButton(currentRoute);
        });

        return unsubscribe;
    }, [navigation]);

    return (
        <View style={styles.container}>

            <TouchableOpacity 
                style={[styles.button, activeButton === 'TimerScreen' && {backgroundColor: '#a008ab'}]} 
                onPress={() => handleNavigate('TimerScreen')}>
                <Icons type={'1'} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, activeButton === 'KnowledgeScreen' && {backgroundColor: '#a008ab'}]} 
                onPress={() => handleNavigate('KnowledgeScreen')}>
                <Icons type={'2'} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, activeButton === 'ColorsScreen' && {backgroundColor: '#a008ab'}]} 
                onPress={() => handleNavigate('ColorsScreen')}>
                <Icons type={'3'} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={[styles.button, activeButton === 'SettingsScreen' && {backgroundColor: '#a008ab'}]} 
                onPress={() => handleNavigate('SettingsScreen')}>
                <Icons type={'4'} />
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: 'center',
        flexDirection: 'row',
        paddingHorizontal: 24
    },
    
    button: {
        width: 48,
        height: 48,
        padding: 12,
        borderWidth: 1,
        borderColor: '#fdfeba',
        borderRadius: 16
    },

});

export default Nav;
