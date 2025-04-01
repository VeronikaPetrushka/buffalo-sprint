import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image, ImageBackground } from "react-native"
import { useNavigation } from "@react-navigation/native";

const { height } = Dimensions.get('window');

const Timer = () => {
    const navigation = useNavigation();

    return (
        <ImageBackground source={require('../assets/backgrounds/1.png')} style={{flex: 1}}>
            <View style={styles.container}>

            </View>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 24,
        paddingBottom: height * 0.07
    },

})

export default Timer;