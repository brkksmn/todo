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
});
