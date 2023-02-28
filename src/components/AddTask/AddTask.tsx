import {FC} from 'react';
import {View, Text} from 'react-native';
import React from 'react';
import style from './AddTask.style';

type inputProps = {
  input: string;
};

const AddTask: FC<inputProps> = ({input}) => {
  return (
    <View style={style.container}>
      <Text>{input}</Text>
    </View>
  );
};

export default AddTask;
