import { View } from "react-native"
import Knowledge from "../comp/Knowledge"

const KnowledgeScreen = () => {
    return (
        <View style={styles.container}>
            <Knowledge />
        </View>
    )
}; 

const styles = {
    container: {
        width: "100%",
        height: "100%",
    }
}

export default KnowledgeScreen;