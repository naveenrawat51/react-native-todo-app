import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({onDelete, id, title}) => {

    return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onDelete(id)} >
    <View style={styles.listItem}>
        <Text>{title}</Text>
    </View>
    </TouchableOpacity>)
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: "#ccc",
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 10
    }
})
export default GoalItem