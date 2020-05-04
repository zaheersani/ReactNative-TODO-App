import React, { useState } from 'react';
import { StyleSheet, Text, Button, View, TextInput, ScrollView, TouchableOpacity } from 'react-native';

import CustomButton from './components/ButtonComponent';

export default function App() {
  const [getText, setText] = useState('');
  const [getList, setList] = useState([]);

  const addItem = () => {
    console.log(getText);
    setList([
      ...getList,
      { key: Math.random().toString(), data: getText }
    ]);
    setText('');
  }

  const removeItem = (itemKey) => {
    //var list = getList.filter(item => item.key != itemKey);
    //setList(list);
    setList(list => getList.filter(item => item.key != itemKey));
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

        <CustomButton
          text="ADD"
          textSize={16}
          textColor="white"
          onPressEvent={addItem}
          disabled={getText.length <= 0}
        />

        {/* <Button
          title="Add"
          onPress={addItem}
          disabled={getText.length <= 0}
        /> */}

      </View>
      <ScrollView style={styles.scrollview}>
        {getList.map((item, index) =>
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.7}
          >
            <View style={styles.scrollviewItem}>
              <Text style={styles.scrollviewText}>{index + 1}# {item.data}</Text>
              <TouchableOpacity
                onPress={() => removeItem(item.key)}
              >
                <View style={styles.crosstextcontainer}>
                  <Text style={styles.crosstext}>X</Text>
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  crosstextcontainer: {
    backgroundColor: 'grey',
    borderRadius: 50,
    padding: 5,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  crosstext: {
    fontSize: 16,
    color: 'red',
    fontWeight: "bold"
  },
  scrollviewText: {
    fontSize: 26,
    color: 'white'
  },
  scrollview: {
    paddingTop: 20,
    width: '100%'
  },
  scrollviewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
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
