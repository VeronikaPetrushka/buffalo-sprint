import { View } from "react-native"
import MainMenu from "../comp/MainMenu"

const MainMenuScreen = () => {
    return (
        <View style={styles.container}>
            <MainMenu />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default MainMenuScreen;