import React, {useEffect} from 'react';
import {View, FlatList} from 'react-native';
import {SearchUsersService} from '@/services/users';
import {Header} from '@/components/Common';
import {UserCell} from '@/components/List';
import styles from './styles';

const Search = props => {
  const [searchName, setName] = React.useState('');
  const [users, setUsers] = React.useState([]);

  const fetchData = () => {
    SearchUsersService(searchName)
      .then(res => {
        const {items} = res;

        setUsers(items);
      })
      .catch(error => {
        return error;
      });
  };

  useEffect(() => {
    if (!!searchName && searchName.length > 2) {
      fetchData();
    }

    return () => {};
  }, [searchName]);

  const goProfilePage = item => {
    props.navigation.navigate('Profile', {...item});
  };

  return (
    <View style={styles.container}>
      <Header isSearchVisible={true} onChangeText={text => setName(text)} />
      {users && searchName.length > 2 && (
        <FlatList
          style={styles.listContainer}
          renderItem={({item}) => {
            return (
              <UserCell
                onPressCell={element => goProfilePage(element)}
                item={item}
              />
            );
          }}
          data={users}
        />
      )}
    </View>
  );
};

export default Search;
