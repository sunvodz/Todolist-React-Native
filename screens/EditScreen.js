import React, { Component, useState } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";

export default function EditScreen(item) {

  return (
    <View style={styles.container}>
     {item.text}
    </View>
  );
}


EditScreen.navigationOptions = {
  title: "Edit"
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
