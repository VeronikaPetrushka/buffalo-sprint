import { View } from "react-native"
import Colors from "../comp/Colors"

const ColorsScreen = () => {
    return (
        <View style={styles.container}>
            <Colors />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default ColorsScreen;