import {Text, View} from 'react-native';
import React from 'react';
import Card from './components/Card';
import style from './App.style';
export default function App() {
  return (
    <View style={style.container}>
      <View style={style.title_view}>
        <Text style={style.title}>YAPILACAKLAR</Text>
        <Text style={style.title}>0</Text>
      </View>
      <Card textProp="hello world" />
    </View>
  );
}
