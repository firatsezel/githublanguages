import {StyleSheet} from 'react-native';
import {Colors} from '@/theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
  },
  subTitle: {
    marginTop: 60,
    width: '80%',
    height: 80,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
  middleView: {
    marginTop: 30,
    width: '90%',
    height: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomView: {
    marginTop: 30,
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  second: {
    flex: 1,
    marginTop: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  first: {
    flex: 2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  third: {
    flex: 1,
    marginTop: 50,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  subText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.gray,
  },
  seperator: {
    width: '80%',
    height: 1.5,
    backgroundColor: Colors.gray,
    opacity: 0.6,
  },
});
