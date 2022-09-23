import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#fff',
  },
  headerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    position: 'relative',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333333',
  },
  addIconFlex: {
    position: 'absolute',
    right: 10,
    bottom: 15,
  },
  contentFlex: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    flex: 1,
  },
  cardFlex: {
    backgroundColor: '#ffffff',
    borderRadius: 13,
    height: 150,
    marginBottom: 20,
  },
  cardTopFlex: {
    paddingTop: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  cardTime: {
    fontSize: 20,
    color: '#000000',
    marginRight: 10,
  },
  statusFlex: {
    flexDirection: 'row',
  },
  iconFlex: {
    marginRight: 5,
  },
  cardContentText: {
    paddingHorizontal: 60,
    paddingTop: 10,
    height: 50,
  },
  cardText: {
    fontSize: 16,
    color: '#000000',
  },
  tagFlex: {
    alignItems: 'flex-end',
    paddingRight: 20,
    paddingTop: 15,
  },
  tagText: {
    color: '#000000',
  },
  iconSelectFlex: {
    position: 'absolute',
    right: 20,
    top: 0,
  },
  footerDesc: {
    alignItems: 'center',
  },
  rowBack: {
    backgroundColor: '#EC6941',
    width: '80%',
    height: 150,
    borderRadius: 16,
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  deleteText: {
    color: '#fff',
    fontSize: 16,
    paddingRight: 20,
  },
});
