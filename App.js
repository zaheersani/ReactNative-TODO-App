import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [getText, setText] = useState('');
  const [getList, setList] = useState(['item 1', 'item 2']);

  const addItem = () => {
    console.log(getText);
    setList([...getList, getText]);
    setText('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>todo</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Item"
          onChangeText={text => setText(text)}
          value={getText}
        />
        <Button
          title="Add"
          onPress={addItem}
        />
      </View>
      <View>
        <Text style={{ fontSize: 26 }}>{getText}</Text>
      </View>
      <ScrollView style={styles.scrollview}>
        {getList.map((item) =>
          <View style={styles.scrollviewItem}>
            <Text style={styles.scrollviewText}>{item}</Text>
          </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollviewText: {
    fontSize: 26,
    color: 'white'
  },
  scrollview: {
    width: '100%'
  },
  scrollviewItem: {
    backgroundColor: 'orange',
    alignSelf: "center",
    padding: 10,
    margin: 5,
    width: '90%',
    borderRadius: 10
  },
  title: {
    fontSize: 64,
    color: 'lightgrey'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40
  },
  inputContainer: {
    flexDirection: "row",
    width: '70%',
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    borderColor: 'red',
    //borderWidth: 2,
    borderBottomWidth: 2,
    width: '70%',
    // borderRadius: 50,
    fontSize: 16,
    padding: 10
  }
});
