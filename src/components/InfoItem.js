import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WIDTH} from '../commons/Constants';

const InfoItem = ({name, info}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginBottom: 12,
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 0.7,
  },
  name: {
    color: '#999',
    fontSize: 14,
    width: WIDTH * 0.3,
  },
  info: {
    color: '#4c4c4c',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
    alignSelf: 'flex-end',
  },
});

export default InfoItem;
