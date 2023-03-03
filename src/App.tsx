import {Text, TextInput, View, Button} from 'react-native';
import React, {FC, useState} from 'react';
import Card from './components/Card';
import style from './App.style';
type ChildProps = {
  inputValue: string;
};
const App: FC<ChildProps> = ({inputValue}) => {
  const [text, setText] = useState('');
  const handleChange = (inputText: string) => {
    setText(inputText);
  };
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.title_view}>
          <Text style={style.title}>YAPILACAKLAR</Text>
          <Text style={style.title}>0</Text>
        </View>
        <View style={style.body}>
          <Card textProp={inputValue} />
        </View>
        <View style={style.input_container}>
          <View style={style.textInput}>
            <TextInput
              style={style.text}
              placeholder="Yapılacak..."
              onChangeText={handleChange}
              value={text}
            />
          </View>
          <View style={style.button}>
            <Button title="Kaydet" color={'#808080'} />
          </View>
        </View>
      </View>
    </View>
  );
};
export default App;
