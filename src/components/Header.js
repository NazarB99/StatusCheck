import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WIDTH} from '../commons/Constants';

const Header = ({title}) => {
  const statusTitle = title?.routes[1]?.params?.company?.name;
  console.log(title);
  console.log(statusTitle);
  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.headerTitle}>{statusTitle || 'Все заказы'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    paddingVertical: 20,
    backgroundColor: '#FF7466',
  },
  headerTitle: {
    fontSize: 20,
    marginLeft: WIDTH * 0.2,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Header;
