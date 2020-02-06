import React, { Component, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import Topic from "../components/Topic";
import TodoItem from "../components/TodoItem";
import AddTodo from "../components/AddTodo";
export default function TodolistScreen() {
  const [todos, setTodos] = useState([
    { text: "Test1", key: "1" },
    { text: "Test2", key: "2" },
    { text: "Test3", key: "3" }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key != key);
    });
  };

  const submitHandler = text => {
    if (text.length > 2) {
      setTodos(prevTodos => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Error!", "Todos must be over 2 chars long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
        { text: "ok", onPress: () => console.log("alert closed") }
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <Topic />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}


TodolistScreen.navigationOptions = {
  title: "Todolist"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    padding: 20
  },
  list: {
    marginTop: 5
  }
});
