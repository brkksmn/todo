import {FC} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import style from './AddTask.style';

type inputProps = {
  input: string;
};

const AddTask: FC<inputProps> = ({}) => {
  return (
    <View style={style.container}>
      <View>
        <TextInput style={style.textInput} />
      </View>
      <View>
        <Button title="Kaydet" color={'#808080'} />
      </View>
    </View>
  );
};

export default AddTask;
