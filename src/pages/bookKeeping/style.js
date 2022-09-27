import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bookKeepFlex: {
    flex: 1,
  },
  headerFlex: {
    height: 44,
    backgroundColor: '#333',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 14,
    color: '#ffffff',
  },
  headerIcon: {
    position: 'absolute',
    right: 16,
  },
  incomeListFlex: {
    height: 90,
    backgroundColor: '#333',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingRight: 50,
    position: 'relative',
  },
  yearText: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 10,
  },
  dateFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 5,
  },
  labelTitle: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 10,
  },
  valuePrice: {
    color: '#fff',
    fontSize: 16,
  },
  headerFooterFlex: {
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    bottom: -45,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 70,
  },
  footerLabelFlex: {
    alignItems: 'center',
  },
  footerLabelText: {
    marginTop: 2,
    color: '#333333',
    fontSize: 12,
  },
});
