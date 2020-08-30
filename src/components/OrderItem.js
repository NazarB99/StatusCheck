import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const OrderItem = ({item, order, onOrderPress}) => {
  console.log(item);
  return item ? (
    <TouchableOpacity
      onPress={() => onOrderPress(item, order.id)}
      style={styles.orderItem(order.state)}>
      <View style={{paddingVertical: 5}}>
        <View style={styles.timeInfo}>
          <Text style={styles.timeText}>{order.date}</Text>
          <Text style={styles.timeText}>{order.from + ' - ' + order.to}</Text>
        </View>
        <Text style={styles.companyName}>{item.name}</Text>
        <Text style={styles.companyAddress}>{item.addr}</Text>
      </View>
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  orderItem: (state) => ({
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderLeftColor:
      state === 0 ? '#70D65C' : state === 1 ? '#3399FF' : '#999999',
    borderLeftWidth: 5,
  }),
  timeText: {
    fontSize: 12,
    color: '#4c4c4c',
  },
  companyName: {
    marginVertical: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4c4c4c',
  },
  companyAddress: {
    marginVertical: 15,
    fontSize: 16,
    color: '#4c4c4c',
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 2,
    paddingVertical: 10,
  },
});

export default OrderItem;
