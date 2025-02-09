import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
    const [enterGoalText, setEnterGoalText] = useState("");
    const [courseGoals, setCourseGoal] = useState([]);

    function goalInputHandler(enteredText) {
        setEnterGoalText(enteredText);
    }

    function addGoalHandler() {
        setCourseGoal(currentCourseGoals => [
            ...currentCourseGoals, // Use currentCourseGoals instead of courseGoals
            { id: Math.random().toString(), text: enterGoalText } // Each goal should be an object with an id
        ]);
        setEnterGoalText(""); // Clear input after adding
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enterGoalText} // Bind value to state
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    keyExtractor={(item) => item.id} // Extract key properly
                    renderItem={({ item }) => (
                        <View style={styles.goalItems}>
                            <Text style={styles.goalText}>{item.text}</Text>
                        </View>
                    )}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        borderWidth: 1,
        borderColor: "#cccccc",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "red",
        width: "70%",
        padding: 8,
    },
    goalsContainer: {
        flex: 5,
    },
    goalItems: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: "white",
    },
});

