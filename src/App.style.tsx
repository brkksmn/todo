import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
    justifyContent: 'flex-start',
  },
  header: {
    flex: 1,
  },
  body: {
    flex: 2,
    alignContent: 'center',
  },
  title_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: '#ffa500',
    fontSize: 40,
    fontWeight: '600',
  },
  input_container: {
    margin: 10,
    flex: 0,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#37474f',
    borderRadius: 10,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#728995',
    position: 'relative',
    paddingBottom: 5,
    color: '#808080',
  },
  text: {
    color: 'white',
  },
  button: {
    padding: 5,
    borderRadius: 50,
    overflow: 'hidden',
    color: '#808080',
  },
});
