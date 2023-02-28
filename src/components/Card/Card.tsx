import {View, Text} from 'react-native';
import React, {FC} from 'react';
import style from './Card.style';

type CardProps = {
  textProp: string;
};

const Card: FC<CardProps> = ({textProp}) => {
  return (
    <View style={style.container}>
      <Text style={style.text_style}>{textProp}</Text>
    </View>
  );
};

export default Card;
