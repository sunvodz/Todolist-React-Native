import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AddTodo() {
  return (
    <View style={styles.topic}>
      <Text style={styles.title}>Topic</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  topic: {
    height:20,
  },
  title: {
    textAlign: "center"
  }
});
