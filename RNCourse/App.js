import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.textInputContainer} placeholder={"Your goal"}/>
                <Button title={"Add goal"}/>
            </View>
            <View>
                <Text>List of  Goals...</Text>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        padding:50,

    },
    inputContainer: {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    textInputContainer: {
        borderWidth:1,
        borderColor:'red',
        width:'80%',
    }

});
