import {Text, TextInput, View, Button, FlatList, Pressable} from 'react-native';
import React, {useState} from 'react';
import Card from './components/Card';
import style from './App.style';

const App = () => {
  const [text, setText] = useState<string>('');
  const [tasks, setTasks] = useState<any>([]);
  const handleAddTask = () => {
    setTasks([...tasks, text]);
    setText('');
  };
  const handleDeleteTask = () => {
    const newTasks = [...tasks];
    const index = Number(Object.keys(tasks));
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.title_view}>
          <Text style={style.title}>YAPILACAKLAR</Text>
          <Text style={style.title}>{Object.keys(tasks).length}</Text>
        </View>

        <View style={style.body}>
          <Pressable onPress={() => handleDeleteTask()}>
            <FlatList
              data={tasks}
              keyExtractor={item => item + Date.now() + Math.random()}
              renderItem={({item}) => <Card textProp={item} />}
            />
          </Pressable>
        </View>

        <View style={style.input_container}>
          <View style={style.textInput}>
            <TextInput
              style={style.text}
              placeholder="Yapılacak..."
              onChangeText={setText}
              value={text}
            />
          </View>
          <View style={style.button}>
            <Button title="Kaydet" color={'#808080'} onPress={handleAddTask} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default App;
