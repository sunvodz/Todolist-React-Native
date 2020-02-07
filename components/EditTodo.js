import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Modal
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function EditTodo({ item }) {
  const [modalOpen, setModalOpen] = useState(false);

  const [text, setText] = useState("");
  const changeHandler = val => {
    setText(val);
  };
  return (
    <View style={styles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View>
          <MaterialIcons
            name="close"
            style={styles.modalToggle}
            size={18}
            onPress={() => setModalOpen(false)}
          />
          <View style={styles.content}>
            <Text>Edit task : {item.text}</Text>
            <TextInput style={styles.input} defaultValue={item.text} onChangeText={changeHandler}/>
            <Button title="Save" />
          </View>
        </View>
      </Modal>

      <MaterialIcons name="edit" size={18} onPress={() => setModalOpen(true)} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginTop: 10,
    padding: 30
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  content: {
    padding: 20
  },
  container: {
    paddingRight:10
  },
});
