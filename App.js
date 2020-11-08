import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMore, setIsAddMode] = useState(false);
  const addGoalHandler = (enterdGoal) => {
     if(enterdGoal && enterdGoal !== '') {
      setCourseGoals(currentGoals => [...currentGoals, { key: Math.random().toString(), value: enterdGoal}]);
      setIsAddMode(false);
     }
  }

  const onDeleteHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(({key}) => key !== goalId)
    })
  };

  const onCancelHandler = () => {
    setIsAddMode(false);
  }


  return (
    <View style={{ padding: 30, flexDirection: 'column'}}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput isVisible={isAddMore} cancel={onCancelHandler} onAddGoal={addGoalHandler} />
      <FlatList
      data={courseGoals}
      keyExtractor={(item, index) => item.key}
      renderItem={itemData => (
        <GoalItem id={itemData.item.key} onDelete={onDeleteHandler} title={itemData.item.value} />
      )} />
    </View>
  );
}
