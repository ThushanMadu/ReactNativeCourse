import{useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView } from 'react-native';

export default function App() {
    const [enterGoalText,setEnterGoalText] = useState("");
    const [courseGoals, setCourseGoal] = useState([]);
    function goalInputHandler(enterdText) {
        setEnterGoalText(enterdText);
    }

    function addGoalHandler() {
        setCourseGoal(currentCourseGoals=>[
            ...courseGoals,
            enterGoalText
        ]);
    }

    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInput}
                           placeholder="Your course goal!"
                           onChangeText={goalInputHandler} />
                <Button title="Add Goal" onPress={addGoalHandler}  />
            </View>
            <View style={styles.goalsContainer}>
            <ScrollView>
                {courseGoals.map((goal) =>(
                    <View style={styles.goalItems} key={goal}>
                    <Text style={styles.goalText}>{goal}</Text>
                    </View>
                ))}

            </ScrollView>
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
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
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

    goalItems:{
        margin:8,
        padding:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
    },
    goalText: {
        color:"white",
    },
});
