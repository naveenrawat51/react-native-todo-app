import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

export default function GoalInput({onAddGoal, isVisible, cancel}) {

    const [enterdGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
      }

    const addGoalHandler = () => {
        onAddGoal(enterdGoal);
        setEnteredGoal('');
    }
    return (
    <Modal visible={isVisible} animationType="slide">
    <View style={styles.inputContainer}>
       <TextInput
       style={styles.input}
       placeholder="Course goal"
       onChangeText={goalInputHandler}
       value={enterdGoal}/>
       <View style={styles.addOnButton}>
       <View style={styles.button}>
       <Button title="CANCEL" color="red" onPress={cancel} />
       </View>
       <View style={styles.button}>
       <Button title="ADD" onPress={addGoalHandler}/>
       </View>
       </View>
    </View>
    </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        width: '80%',
        borderColor: 'black',
        padding: 5,
        marginBottom: 10
    },
    addOnButton: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        width: '40%'
    }
})