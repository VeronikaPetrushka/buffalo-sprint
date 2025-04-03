import { View } from "react-native"
import WelcomeAbout from "../comp/WelcomeAbout"

const WelcomeAboutScreen = () => {
    return (
        <View style={styles.container}>
            <WelcomeAbout />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default WelcomeAboutScreen;