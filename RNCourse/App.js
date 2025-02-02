import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your goal" />
                <Button title="Add Goal" />
            </View>
            <View style={styles.goalsContainer}>
                <Text >List of Goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 24,
        borderWidth:1,
        borderColor: "#cccccc",

    },
    textInput: {
        borderWidth: 1,
        borderColor: "red",
        width: "70%",
        padding: 8,
    },

    goalsContainer: {
        flex:5,

    },
});
