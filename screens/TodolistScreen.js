import React, { Component, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
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
    setTodos(prevTodos => {
      return [{ text: text, key: Math.random().toString() }, ...prevTodos];
    });
  };
  return (
    <View style={styles.container}>
      <Topic />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
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
