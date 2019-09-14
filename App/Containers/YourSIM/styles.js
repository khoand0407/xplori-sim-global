import { StyleSheet } from 'react-native';
import Colors from '../../Themes/Colors';

export default StyleSheet.create({
  package: { color: '#fff', paddingHorizontal: 10 },
  mediaHead: {
    height: 120,
    justifyContent: 'flex-end',
    marginHorizontal: 12,
    marginBottom: 15,
  },
  spaceBottom: { marginBottom: 70 },
  detailText: {
    fontSize: 18,
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
  price: { fontSize: 18, marginTop: 10 },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginBottom: 40,
  },
  gbSim: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  contaner: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  form: {
    marginHorizontal: 12,
    backgroundColor: '#fff',
    padding: 12,
    flex: 1,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  caption: { fontSize: 18, marginVertical: 10, fontWeight: '400' },
  captionHead: {
    fontSize: 21,
    marginVertical: 10,
    fontWeight: 'bold',
    marginHorizontal: 15,
  },
  btn: { marginVertical: 5 },
});
