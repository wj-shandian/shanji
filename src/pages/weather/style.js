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
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  skipText: {
    textAlign: 'center',
  },
  headerTime: {
    color: '#000000',
    fontSize: 16,
  },
  activeBorder: {
    borderWidth: 1,
    borderColor: '#000000',
  },
  statusContent: {
    marginVertical: 20,
    flex: 1,
  },
  statusContentTitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
  },
  iconContainer: {
    marginBottom: 38,
    width: 75,
  },
  iconFlex: {
    paddingHorizontal: 12,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 40,
    flex: 1,
  },
  iconButtonFlex: {
    width: 75,
    height: 75,
    backgroundColor: '#fff',
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  iconName: {
    textAlign: 'center',
  },
  footerFlex: {
    paddingHorizontal: 20,
  },
  footerButton: {
    backgroundColor: '#000000',
    borderRadius: 20,
    height: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    color: '#fff',
  },
});
