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
  modalBackground: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    width: 320,
    height: 150,
    borderRadius: 20,
    backgroundColor: '#ffffff',
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  modalTitle: {
    textAlign: 'center',
    color: '#666',
    fontSize: 15,
    marginBottom: 30,
  },
  operationFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cancelFlex: {
    width: 105,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#E9E9E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
    fontSize: 12,
    color: '#333',
  },
  confirmFlex: {
    width: 105,
    height: 27,
    borderRadius: 14,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  confirmText: {
    fontSize: 12,
    color: '#fff',
  },
});
