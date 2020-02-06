import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function DeleteTodo({ id, pressHandler }) {
  return (
    <MaterialIcons
      name="delete"
      size={18}
      onPress={() => pressHandler(id)}
    />
  );
}

const styles = StyleSheet.create({

});
