import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  selectMainFlex: {
    flex: 1,
  },
  statusHeaderFlex: {
    height: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  skipButton: {
    width: 60,
    height: 20,
    backgroundColor: '#000000',
    borderRadius: 10,
  },
  skipText: {
    textAlign: 'center',
    color: '#fff',
  },
  inputFlex: {
    padding: 12,
    flex: 1,
  },
  inputBackground: {
    backgroundColor: '#ffffff',
    borderRadius: 9,
    flex: 1,
    padding: 20,
  },
  iconFlex: {
    flexDirection: 'row',
  },
  iconRight: {
    marginRight: 10,
  },
  inputHeight: {
    minHeight: 500,
    textAlignVertical: 'top',
  },
});
