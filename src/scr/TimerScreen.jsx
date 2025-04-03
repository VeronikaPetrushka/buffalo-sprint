import { View } from "react-native"
import Timer from "../comp/Timer"

const TimerScreen = () => {
    return (
        <View style={styles.container}>
            <Timer />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default TimerScreen;