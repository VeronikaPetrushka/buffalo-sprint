import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground, ScrollView } from "react-native"
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import knowledge from "../constants/knowledge.js";

const { height } = Dimensions.get('window');

const Knowledge = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/backgrounds/2.png')} style={{flex: 1}}>
            <View style={styles.container}>

                <Image source={require('../assets/titles/knowledge.png')} style={{width: 285, height: 40, resizeMode: 'contain', marginBottom: 30}} />

                <ScrollView contentContainerStyle={{width: '100%', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        knowledge.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.button} onPress={() => navigation.navigate('LearnScreen', { item })}>
                                <LinearGradient colors={['#a008ab', '#7b017c']} style={{width: '100%', height: '100%', borderRadius: 20}}>
                                    <View style={styles.buttonInner}>
                                        <Text style={styles.buttonText}>{item.title}</Text>
                                    </View>
                                </LinearGradient>
                            </TouchableOpacity>
                        ))
                    }
                    <View style={{height: 120}} />
                </ScrollView>
            
            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 24,
        paddingTop: height * 0.1
    },

    button: {
        width: '47%',
        height: 190,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fdfeba',
        marginBottom: 24
    },

    buttonInner: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 16
    },

    buttonText: {
        fontSize: 18,
        fontWeight: '500',
        lineHeight: '120%',
        color: '#fff'
    }

})

export default Knowledge;