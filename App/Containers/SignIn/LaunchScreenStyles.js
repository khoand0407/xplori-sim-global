import { StyleSheet } from 'react-native';
import { Metrics, ApplicationStyles } from '../../Themes';
import XploriColor from '../../Themes/Colors';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginTop: Metrics.baseMargin * 25,
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
  },
  signUpForm: {
    flex: 1,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    paddingVertical: 40,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  top: {
    flex: 2,
    marginBottom: 40,
  },
  mainContainer: {
    flex: 1,
  },
  titleSignUp: {
    fontWeight: '600',
    fontSize: 28,
  },
  surface: {
    elevation: 2,
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderBottomColor: 'gray',
  },
  space: {
    marginTop: 20,
  },
  form: {
    width: '100%',
    marginTop: 30,
  },
  extend: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 15,
  },
  wrapCheckbox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleCb: {
    marginTop: 7,
  },
  fgPass: {
    textDecorationLine: 'underline',
    color: XploriColor.primary,
  },
  groupBtn: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 7,
  },
  spaceBtn: {
    // flex: 1,
    marginHorizontal: 8,
  },
  btnSkip: {
    fontSize: 20,
  },
});
