import { View } from "react-native"
import Set from "../comp/Set"

const SetScreen = () => {
    return (
        <View style={styles.container}>
            <Set />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default SetScreen;