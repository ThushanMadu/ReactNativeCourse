import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput} placeholder="Your goal" />
                <Button title="Add Goal" />
            </View>
            <View>
                <Text >List of Goals...</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 60,
        paddingHorizontal: 50,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 24,
        
    },
    textInput: {
        borderWidth: 1,
        borderColor: "red",
        width: "80%",
        padding: 8,
    },
});
