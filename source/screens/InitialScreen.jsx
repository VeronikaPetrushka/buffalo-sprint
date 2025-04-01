import { View } from "react-native"
import Initial from "../components/Initial"

const InitialScreen = () => {
    return (
        <View style={styles.container}>
            <Initial />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default InitialScreen;