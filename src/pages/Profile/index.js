import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import Toast from 'react-native-toast-message';
import {captureScreen} from 'react-native-view-shot';
import {GetUserService} from '@/services/users';
import {GetRepoService, GetUserLanguageServie} from '@/services/repos';
import {Header, Text, LargeLanguage, SmallLanguage} from '@/components/Common';
import {LargeButton} from '@/components/Buttons';
import {addLanguages, sortLanguages} from '@/utils/functions';
import styles from './styles';

let temp = {};

const Profile = props => {
  const [user, setUser] = React.useState({});
  const [languages, setLanguages] = React.useState({});
  const [languagesOrdered, setLanguagesOrdered] = React.useState([]);
  const [first, setFirst] = React.useState({name: 'None', size: 'None'});
  const [second, setSecond] = React.useState({name: 'None', size: 'None'});
  const [third, setThird] = React.useState({name: 'None', size: 'None'});

  const {login, avatar_url} = props.route.params;

  const ref = useRef();

  const fetchData = () => {
    GetUserService(login)
      .then(res => {
        setUser(res);
      })
      .catch(error => {
        return error;
      });
  };

  const getRepos = () => {
    GetRepoService(login)
      .then(res => {
        if (res.length > 0) {
          res.map(item => {
            GetUserLanguageServie(item.full_name)
              .then(res => {
                temp = addLanguages(res, temp);
                setLanguages({...temp});
              })
              .catch(error => {
                return error;
              });
          });
        }
      })
      .catch(error => {
        return error;
      });
  };

  useEffect(() => {
    fetchData();
    getRepos();

    return () => {};
  }, []);

  useEffect(() => {
    setLanguagesOrdered(sortLanguages(languages));

    return () => {};
  }, [languages]);

  useEffect(() => {
    if (languagesOrdered.length > 2) {
      setFirst({...languagesOrdered[0]});
      setSecond({...languagesOrdered[1]});
      setThird({...languagesOrdered[2]});
    } else if (languagesOrdered > 1) {
      setFirst({...languagesOrdered[0]});
      setSecond({...languagesOrdered[1]});
    } else if (languagesOrdered > 0) {
      setThird({...languagesOrdered[2]});
    }

    return () => {};
  }, [languagesOrdered]);

  const takeScreenShot = () => {
    captureScreen({
      format: 'jpg',
      quality: 0.8,
    }).then(
      uri => {
        Toast.show({
          type: 'success',
          text1: 'The snapshot is saved in',
          text2: uri,
        });
      },
      error => {
        Toast.show({
          type: 'error',
          text1: 'Oops, snapshot failed',
          text2: error,
        });
      },
    );
  };

  return (
    <View style={styles.container}>
      <Header
        isSearchVisible={false}
        isProfile={true}
        url={avatar_url}
        user={user}
      />
      <View style={styles.subTitle}>
        <Text style={styles.subText}>{`@${login}`}</Text>
        <View style={styles.seperator} />
      </View>
      <View style={styles.middleView}>
        <View style={styles.second}>
          <SmallLanguage name={second.name} size={second.size} />
        </View>
        <View style={styles.first}>
          <LargeLanguage name={first.name} size={first.size} />
        </View>
        <View style={styles.third}>
          <SmallLanguage name={third.name} size={third.size} />
        </View>
      </View>
      <View style={styles.bottomView}>
        <LargeButton
          title="Take a Screenshot"
          onPress={() => takeScreenShot()}
        />
      </View>
    </View>
  );
};

export default Profile;
