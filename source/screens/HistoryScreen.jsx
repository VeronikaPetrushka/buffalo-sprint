import { View } from "react-native"
import History from "../components/History"

const HistoryScreen = () => {
    return (
        <View style={styles.container}>
            <History />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default HistoryScreen;