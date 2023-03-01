import {Text, View} from 'react-native';
import React from 'react';
import Card from './components/Card';
import style from './App.style';
import AddTask from './components/AddTask';
export default function App() {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View style={style.title_view}>
          <Text style={style.title}>YAPILACAKLAR</Text>
          <Text style={style.title}>0</Text>
        </View>
        <View style={style.body}>
          <Card textProp="hello world" />
        </View>
        <AddTask input="kaydet" />
      </View>
    </View>
  );
}
