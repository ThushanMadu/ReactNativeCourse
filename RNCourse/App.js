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
            ...currentCourseGoals,
            { id: Math.random().toString(), text: enterGoalText }
        ]);
        setEnterGoalText("");
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your course goal!"
                    onChangeText={goalInputHandler}
                    value={enterGoalText}
                />
                <Button title="Add Goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={(itemData) => {
                        return (
                            <View style={styles.goalItem}>
                                <Text style={styles.goalText}>{itemData.item.text}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => {
                        return item.id;
                    }}
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
        padding: 9,
    },
    goalsContainer: {
        flex: 5,
    },
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalText: {
        color: "white",
    },
});
