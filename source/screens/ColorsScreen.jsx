import { View } from "react-native"
import Colors from "../components/Colors"
import Buttons from "../components/Buttons";

const ColorsScreen = () => {
    return (
        <View style={styles.container}>
            <Colors />
            <View style={styles.nav}>
                <Buttons />
            </View>
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    },
    nav: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        zIndex: 10
    }
}

export default ColorsScreen;