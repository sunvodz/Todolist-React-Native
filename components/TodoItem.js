import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DeleteTodo from "./DeleteTodo";
import EditTodo from "./EditTodo";

export default function TodoItem({ item, pressHandler ,editHandler}) {

  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
        <EditTodo item={item}/>
        <DeleteTodo id={item.key} pressHandler={pressHandler} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: "row"
  },
  text: {
    marginRight: "75%",
  }
});
